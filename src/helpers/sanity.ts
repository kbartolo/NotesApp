import SanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";
import { PROJECTID, DATASET, APIVERSION } from "@env";

const client = SanityClient({
  projectId: PROJECTID,
  dataset: DATASET,
  useCdn: true,
  apiVersion: APIVERSION,
});

const builder = imageBuilder(client);
export const urlFor = (source: any) => builder.image(source);
// run this to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000
// sanity cors add http://localhost:19006

export default client;
