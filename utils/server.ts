const dev = process.env.env_node !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://next-ecommerce-front.vercel.app';