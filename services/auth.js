const url = 'http://localhost:3000';

const postAuth = async (value) => {
  const data = await fetch(`${url}/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(value),
  });
  console.log('aaaa', data);
  return data;
};

export default postAuth;
