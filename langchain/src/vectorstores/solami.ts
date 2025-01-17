import type {
    createCluster,
    createClient,
    RediSearchSchema,
    SearchOptions,
  } from "redis";
  
  import {
    PublicKey,Transaction
  } from "@solana/web3.js";
  import { BN } from "bn.js";
  import bs58 from 'bs58';
  
  import { PromisePool } from '@supercharge/promise-pool';
  import * as anchor from '@coral-xyz/anchor';
  import { Connection, Keypair } from "@solana/web3.js";
  
  
  // import axios into Node16
  import { SchemaFieldTypes, VectorAlgorithms } from "redis";
  // @ts-ignore
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { Embeddings } from "../embeddings/base.js";
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { VectorStore } from "./base.js";
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { Document } from "../document.js";
  
  export type CreateSchemaVectorField<
    T extends VectorAlgorithms,
    A extends Record<string, unknown>
  > = {
    ALGORITHM: T;
    DISTANCE_METRIC: "L2" | "IP" | "COSINE";
    INITIAL_CAP?: number;
  } & A;
  
  
  /**
   * Type for creating a flat schema vector field. It extends
   * CreateSchemaVectorField with a block size property.
   */
  export type CreateSchemaFlatVectorField = CreateSchemaVectorField<
    VectorAlgorithms.FLAT,
    {
      BLOCK_SIZE?: number;
    }
  >;
  /**
   * Type for creating a HNSW schema vector field. It extends
   * CreateSchemaVectorField with M, EF_CONSTRUCTION, and EF_RUNTIME
   * properties.
   */
  export type CreateSchemaHNSWVectorField = CreateSchemaVectorField<
    VectorAlgorithms.HNSW,
    {
      M?: number;
      EF_CONSTRUCTION?: number;
      EF_RUNTIME?: number;
    }
  >;
  
  /**
   * Interface for the configuration of the RedisVectorStore. It includes
   * the Redis client, index name, index options, key prefix, content key,
   * metadata key, vector key, and filter.
   */
  export interface RedisVectorStoreConfig {
    redisClient:
      | ReturnType<typeof createClient>
      | ReturnType<typeof createCluster>;
    indexName: string;
    indexOptions?: CreateSchemaFlatVectorField | CreateSchemaHNSWVectorField;
    keyPrefix?: string;
    contentKey?: string;
    metadataKey?: string;
    vectorKey?: string;
    filter?: RedisVectorStoreFilterType;
  }
  
  /**
   * Interface for the options when adding documents to the
   * RedisVectorStore. It includes keys and batch size.
   */
  export interface RedisAddOptions {
    keys?: string[];
    batchSize?: number;
  }
  
  /**
   * Type for the filter used in the RedisVectorStore. It is an array of
   * strings.
   */
  export type RedisVectorStoreFilterType = string[];
  
  /**
   * Class representing a RedisVectorStore. It extends the VectorStore class
   * and includes methods for adding documents and vectors, performing
   * similarity searches, managing the index, and more.
   */

const PROGRAM_ID = new PublicKey("AsfHZW9SauVh6u49Hbb7dZdjDP8rYJC2f35yvWJyPYwM")

  export class RedisVectorStore extends VectorStore {
    declare FilterType: RedisVectorStoreFilterType;
  
    private redisClient:
      | ReturnType<typeof createClient>
      | ReturnType<typeof createCluster>;
  
    indexName: string;
  
    indexOptions: CreateSchemaFlatVectorField | CreateSchemaHNSWVectorField;
  
    keyPrefix: string;
  
    contentKey: string;
  
    metadataKey: string;
  
    vectorKey: string;
  
    filter?: RedisVectorStoreFilterType;
  
    _vectorstoreType(): string {
      return "redis";
    }
  
    constructor(embeddings: Embeddings, _dbConfig: RedisVectorStoreConfig) {
      super(embeddings, _dbConfig);
  
      this.redisClient = _dbConfig.redisClient;
      this.indexName = _dbConfig.indexName;
      this.indexOptions = _dbConfig.indexOptions ?? {
        ALGORITHM: VectorAlgorithms.HNSW,
        DISTANCE_METRIC: "COSINE",
      };
      this.keyPrefix = _dbConfig.keyPrefix ?? `doc:${this.indexName}:`;
      this.contentKey = _dbConfig.contentKey ?? "content";
      this.metadataKey = _dbConfig.metadataKey ?? "metadata";
      this.vectorKey = _dbConfig.vectorKey ?? "content_vector";
      this.filter = _dbConfig.filter;
    }
  
    /**
     * Method for adding documents to the RedisVectorStore. It first converts
     * the documents to texts and then adds them as vectors.
     * @param documents The documents to add.
     * @param options Optional parameters for adding the documents.
     * @returns A promise that resolves when the documents have been added.
     */
      // @ts-ignore
    async addDocuments(documents: Document[], options?: RedisAddOptions) {
      let texts = documents.map(({ pageContent }) => pageContent);
      let min = 0
      texts = texts.slice(min)
        documents = documents.slice(min)
      return this.addVectors(
        await this.embeddings.embedDocuments(texts),
        documents,
        texts,
  
       
      );
    }
  
    async addDocumentsNew(documents: Document[], options?: RedisAddOptions) {
      const texts = documents.map(({ pageContent }) => pageContent);
  
      return this.addVectorNew(
        documents,
        texts,
        options
      );
    }
    /**
     * Method for adding vectors to the RedisVectorStore. It checks if the
     * index exists and creates it if it doesn't, then adds the vectors in
     * batches.
     * @param vectors The vectors to add.
     * @param documents The documents associated with the vectors.
     * @param keys Optional keys for the vectors.
     * @param batchSize The size of the batches in which to add the vectors. Defaults to 1000.
     * @returns A promise that resolves when the vectors have been added.
     */
  
  
    async waitSomeMs(number: any) {
      let num = number.toString();
      // @ts-ignore
      num = Number(num);
      return new Promise(function (resolve) {
          setTimeout(function () {
              resolve("");
              // @ts-ignore
          }, num);
      });
    }
    
  async waitSomeSeconds(number: any) {
    let num = number.toString() + "000";
    // @ts-ignore
    num = Number(num);
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("");
            // @ts-ignore
        }, num);
    });
  }
  
  
    async addVectors(
      vectors: number[][],
      // @ts-ignore
      documents: Document[],
      // @ts-ignore
      texts: string[],
    ) {
  /*
      // check if the index exists and create it if it doesn't
      await this.createIndex(vectors[0].length);
  
      const info = await this.redisClient.ft.info(this.indexName);
      const lastKeyCount = parseInt(info.numDocs, 10) || 0;
  
      const multi = this.redisClient.multi();
  */
      const provider = new anchor.AnchorProvider(new Connection("https://devnet.helius-rpc.com/?api-key=" + process.env.API_KEY), new anchor.Wallet( Keypair.fromSecretKey(bs58.decode(process.env.SOLANA_SECRET_KEY as string))), {});
  
      const program = new anchor.Program(

        await anchor.Program.fetchIdl(PROGRAM_ID, provider) as anchor.Idl,
        PROGRAM_ID,
        provider
    );
     // slice vectors into batches
      await PromisePool.withConcurrency(16)
      .for(vectors)
      // @ts-ignore
      .handleError(async (err, asset) => {
        console.error(
          `\nError uploading or whatever`,
          err.message,
        );
      })
      // @ts-ignore
      .process(async (v, i) => {
        try {
          let num = Math.round(Math.random()*1000)
// await ms

          await this.waitSomeMs(num)
     
        try {
   
    const myAccount = (anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from(anchor.utils.bytes.utf8.encode("my_account")),
      /// i as Buffer
      Buffer.from(anchor.utils.bytes.utf8.encode(i.toString())),
      provider.wallet.publicKey.toBuffer()],
      PROGRAM_ID
    ))[0]
let tx = await program.methods.setData(([]), new BN(i),  i.toString()).accounts({
 myAccount: myAccount,
 user: provider.wallet.publicKey,
 systemProgram: anchor.web3.SystemProgram.programId,
})
.instruction()

let transaction = new Transaction().add(tx)
transaction.feePayer = provider.wallet.publicKey 
transaction.recentBlockhash = (await provider.connection.getLatestBlockhash()).blockhash
var sig  = await provider.sendAndConfirm(transaction)

console.log(sig)
await provider.connection.confirmTransaction(sig, "finalized")


for (var i3 = 0; i3 < v.length; i3+=32){
  let tx =  await program.methods.extendData((v.slice(i3,i3+32).map((s: any) => s * 10 ** 7 + 10 ** 7) as number[])).accounts({ // new BN(i),  i.toString()
      myAccount: myAccount
    })
    .instruction()
 
    let transaction = new Transaction().add(tx)
    transaction.feePayer = provider.wallet.publicKey 
    transaction.recentBlockhash = (await provider.connection.getLatestBlockhash()).blockhash
    var sig  = await provider.sendAndConfirm(transaction)
    console.log(sig)
    
   }

  } catch (err){

  }
   
} catch (err){

}
          })
      // insert final batch
  
  
      // insert final batch
     // await multi.exec();
    
  
  
  
    }
  
    /**
     * Method for performing a similarity search in the RedisVectorStore. It
     * returns the documents and their scores.
     * @param query The query vector.
     * @param k The number of nearest neighbors to return.
     * @param filter Optional filter to apply to the search.
     * @returns A promise that resolves to an array of documents and their scores.
     */
    async sleep(ms: any) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
  
    async addVectorNew(
      documents: Document[],
      texts: string[],
      { keys, batchSize = 1000 }: RedisAddOptions = {}
    ) {
  
      const provider = new anchor.AnchorProvider(new Connection("https://devnet.helius-rpc.com/?api-key=" + process.env.API_KEY), new anchor.Wallet( Keypair.fromSecretKey(bs58.decode(process.env.SOLANA_SECRET_KEY as string))), {});
        const program = new anchor.Program(

            await anchor.Program.fetchIdl(PROGRAM_ID, provider) as anchor.Idl,
            PROGRAM_ID,
            provider
        );
      let vectors: any = [];
      let accounts = await program.account.myState.all()
      let accounts2 = await program.account.myState.fetchMultiple(accounts.map((s: any) => s.publicKey))
      for (var acc of accounts2){
    let data2  = acc
        

        try{
          if (data2){
console.log(data2)
     let vector = data2.data.map((s: any) => (s - 10 ** 7) / 10 ** 7)
     
     console.log(vector)
     
     let idx: number = Number(data2.idx)
     console.log(Number(idx))
     console.log(vector.length)
        if (vector.length === 1536){
        vectors.push([vector, Number(idx)])
        }
      }
  } catch (err){
    console.log(err)
  }
      }
      let tvectors : number[][] = []
   let   sorted = vectors.sort((a: any, b: any) => {
        return a[1] - b[1]
      });
      console.log(sorted)
   for (let i = 0; i < sorted.length; i++) {
  
    tvectors.push(sorted[i][0])
  }
  let sortedIs = sorted.map((a: any) => Number(a[1]))
  console.log(sortedIs)
  texts = texts.filter((text, iii) => {
    return sortedIs.includes((iii)) ? text : null
  })
  
      vectors = tvectors
      console.log(vectors.length)
      console.log(texts.length)
      
  
      
  
      // check if the index exists and create it if it doesn't
      await this.createIndex(vectors[0].length);
  
      const info = await this.redisClient.ft.info(this.indexName);
      const lastKeyCount = parseInt(info.numDocs, 10) || 0;
      const multi = this.redisClient.multi();
  
      vectors.map(async (vector: any, idx: any) => {
        const key =
          keys && keys.length
            ? keys[idx]
            : `${this.keyPrefix}${idx + lastKeyCount}`;
        
  
            const metadata =
            documents[idx] && documents[idx].metadata
              ? documents[idx].metadata
              : {};
    
        multi.hSet(key, {
          [this.vectorKey]: this.getFloat32Buffer(vector),
          [this.contentKey]: documents[idx].pageContent,
          [this.metadataKey]: this.escapeSpecialChars(JSON.stringify(metadata)),
        });
  
        // write batch
        if (idx % batchSize === 0) {
          await multi.exec();
        }
      });
  
      // insert final batch
      await multi.exec();
    }
  
    async similaritySearchVectorWithScore(
      query: number[],
      k: number,
      filter?: RedisVectorStoreFilterType
    ): Promise<[Document, number][]> {
      if (filter && this.filter) {
        throw new Error("cannot provide both `filter` and `this.filter`");
      }
  
  
      const _filter = filter ?? this.filter;
      const results = await this.redisClient.ft.search(
        this.indexName,
        ...this.buildQuery(query, k, _filter)
      );
      const result: [Document, number][] = [];
  
      if (results.total) {
        for (const res of results.documents) {
          if (res.value) {
            const document = res.value;
            if (document.vector_score) {
              result.push([
                new Document({
                  pageContent: document[this.contentKey] as string,
                  metadata: JSON.parse(
                    this.unEscapeSpecialChars(document.metadata as string)
                  ),
                }),
                Number(document.vector_score),
              ]);
            }
          }
        }
      }
  
      return result;
    }
  
    /**
     * Static method for creating a new instance of RedisVectorStore from
     * texts. It creates documents from the texts and metadata, then adds them
     * to the RedisVectorStore.
     * @param texts The texts to add.
     * @param metadatas The metadata associated with the texts.
     * @param embeddings The embeddings to use.
     * @param dbConfig The configuration for the RedisVectorStore.
     * @returns A promise that resolves to a new instance of RedisVectorStore.
     */
    static fromTexts(
      texts: string[],
      metadatas: object[] | object,
      embeddings: Embeddings,
      dbConfig: RedisVectorStoreConfig
    ): Promise<RedisVectorStore> {
  
      const docs: Document[] = [];
      for (let i = 0; i < texts.length; i += 1) {
        const metadata = Array.isArray(metadatas) ? metadatas[i] : metadatas;
        const newDoc = new Document({
          pageContent: texts[i],
          metadata,
        });
        docs.push(newDoc);
      }
      return RedisVectorStore.fromDocuments(docs, embeddings, dbConfig);
    }
  
    /**
     * Static method for creating a new instance of RedisVectorStore from
     * documents. It adds the documents to the RedisVectorStore.
     * @param docs The documents to add.
     * @param embeddings The embeddings to use.
     * @param dbConfig The configuration for the RedisVectorStore.
     * @returns A promise that resolves to a new instance of RedisVectorStore.
     */
    static async fromDocuments(
      docs: Document[],
      embeddings: Embeddings,
      dbConfig: RedisVectorStoreConfig
    ): Promise<RedisVectorStore> {
      const instance = new this(embeddings, dbConfig);
      await instance.addDocuments(docs);
      return instance;
    }
  
    static async fromDocumentsAndSolana(
      docs: Document[],
      embeddings: Embeddings,
      dbConfig: RedisVectorStoreConfig
    ): Promise<RedisVectorStore> {
      const instance = new this(embeddings, dbConfig);
      await instance.addDocumentsNew(docs);
      return instance;
    }
  
    /**
     * Method for checking if an index exists in the RedisVectorStore.
     * @returns A promise that resolves to a boolean indicating whether the index exists.
     */
    async checkIndexExists() {
      try {
        await this.redisClient.ft.info(this.indexName);
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((err as any)?.message.includes("unknown command")) {
          throw new Error(
            "Failed to run FT.INFO command. Please ensure that you are running a RediSearch-capable Redis instance: https://js.langchain.com/docs/modules/data_connection/vectorstores/integrations/redis#setup"
          );
        }
        // index doesn't exist
        return false;
      }
  
      return true;
    }
  
    /**
     * Method for creating an index in the RedisVectorStore. If the index
     * already exists, it does nothing.
     * @param dimensions The dimensions of the index. Defaults to 1536.
     * @returns A promise that resolves when the index has been created.
     */
    async createIndex(dimensions = 1536): Promise<void> {
      if (await this.checkIndexExists()) {
        return;
      }
  
      const schema: RediSearchSchema = {
        [this.vectorKey]: {
          type: SchemaFieldTypes.VECTOR,
          TYPE: "FLOAT32",
          DIM: dimensions,
          ...this.indexOptions,
        },
        [this.contentKey]: SchemaFieldTypes.TEXT,
        [this.metadataKey]: SchemaFieldTypes.TEXT,
      };
  
      await this.redisClient.ft.create(this.indexName, schema, {
        ON: "HASH",
        PREFIX: this.keyPrefix,
      });
    }
  
    /**
     * Method for dropping an index from the RedisVectorStore.
     * @param deleteDocuments Optional boolean indicating whether to drop the associated documents.
     * @returns A promise that resolves to a boolean indicating whether the index was dropped.
     */
    async dropIndex(deleteDocuments?: boolean): Promise<boolean> {
      try {
        const options = deleteDocuments ? { DD: deleteDocuments } : undefined;
        await this.redisClient.ft.dropIndex(this.indexName, options);
  
        return true;
      } catch (err) {
        return false;
      }
    }
  
    /**
     * Deletes vectors from the vector store.
     * @param params The parameters for deleting vectors.
     * @returns A promise that resolves when the vectors have been deleted.
     */
    async delete(params: { deleteAll: boolean }): Promise<void> {
      if (params.deleteAll) {
        await this.dropIndex(true);
      } else {
        throw new Error(`Invalid parameters passed to "delete".`);
      }
    }
  
    private buildQuery(
      query: number[],
      k: number,
      filter?: RedisVectorStoreFilterType
    ): [string, SearchOptions] {
      const vectorScoreField = "vector_score";
  
      let hybridFields = "*";
      // if a filter is set, modify the hybrid query
      if (filter && filter.length) {
        // `filter` is a list of strings, then it's applied using the OR operator in the metadata key
        // for example: filter = ['foo', 'bar'] => this will filter all metadata containing either 'foo' OR 'bar'
        hybridFields = `@${this.metadataKey}:(${this.prepareFilter(filter)})`;
      }
  
      const baseQuery = `${hybridFields} => [KNN ${k} @${this.vectorKey} $vector AS ${vectorScoreField}]`;
      const returnFields = [this.metadataKey, this.contentKey, vectorScoreField];
  
      const options: SearchOptions = {
        PARAMS: {
          vector: this.getFloat32Buffer(query),
        },
        RETURN: returnFields,
        SORTBY: vectorScoreField,
        DIALECT: 2,
        LIMIT: {
          from: 0,
          size: k,
        },
      };
  
      return [baseQuery, options];
    }
  
    private prepareFilter(filter: RedisVectorStoreFilterType) {
      return filter.map(this.escapeSpecialChars).join("|");
    }
  
    /**
     * Escapes all '-' characters.
     * RediSearch considers '-' as a negative operator, hence we need
     * to escape it
     * @see https://redis.io/docs/stack/search/reference/query_syntax
     *
     * @param str
     * @returns
     */
    private escapeSpecialChars(str: string) {
      return str.replaceAll("-", "\\-");
    }
  
    /**
     * Unescapes all '-' characters, returning the original string
     *
     * @param str
     * @returns
     */
    private unEscapeSpecialChars(str: string) {
      return str.replaceAll("\\-", "-");
    }
  
    /**
     * Converts the vector to the buffer Redis needs to
     * correctly store an embedding
     *
     * @param vector
     * @returns Buffer
     */
    private getFloat32Buffer(vector: number[]) {
      return Buffer.from(new Float32Array(vector).buffer);
    }
  }
  