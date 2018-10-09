
// console.log(require.resolve('umi-plugin-pnp'));

export default {
  plugins: [
    [require.resolve('umi-plugin-pnp'), {
      alias: true,
    }],
  ],
}
