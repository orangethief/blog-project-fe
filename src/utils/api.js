const API_URL = import.meta.env.VITE_API_URL;

export async function fetchPosts() {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
};

export async function fetchPostById(id) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  return res.json();
};

export async function createPost(post) {
  const res = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  return res.json();
};

export async function updatePost(id, post) {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  return res.json();
};

export async function deletePost(id) {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};

