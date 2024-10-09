import { Base } from "../base";
import { NewPost, Post } from "./types";

const resourceName = "posts";

export class Posts extends Base {
  async getPostById(id: number): Promise<Post> {
    const post = await this.request<Post>(`/${resourceName}/${id}`);
    return post;
  }

  async getPosts(): Promise<Post[]> {
    const posts = await this.request<Post[]>(`/${resourceName}`);
    return posts;
  }

  async createPost(newPost: NewPost): Promise<Post> {
    const post = await this.request<Post>(`/${resourceName}`, {
      method: "POST",
      body: JSON.stringify(newPost),
    });
    return post;
  }
}
