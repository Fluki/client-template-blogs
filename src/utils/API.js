import { BACKEND_URL } from '../constants.js';

class API {
  async fetchAllPosts() {
    const response = await fetch(`${BACKEND_URL}/posts`);
    const data = await response.json();

    console.log(data);
    return data;
  }

  async fetchSinglePost(id) {
    const response = await fetch(`${BACKEND_URL}/post/${id}`);
    const data = await response.json();
    console.log(data);

    return data;
  }

  async createPost(post) {
    console.log('create post call ->', post);
    const response = await fetch(`${BACKEND_URL}/create`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(post),
    });

    const data = await response.json();

    return data;
  }

  async updatePost(id, post) {
    const response = await fetch(`${BACKEND_URL}/update/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(post),
    });

    const data = await response.json();
    console.log('Update response data ->', data);

    return data;
  }

  async deletePost(id) {
    const response = await fetch(`${BACKEND_URL}/delete/${id}`);
    return response;
  }
}

const api = new API();
export default api;
