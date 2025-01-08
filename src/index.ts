;(function (Scratch) {
  if (Scratch.extensions.unsandboxed === false) {
    throw new Error('Sandboxed mode is not supported')
  }
  // Your extension's code
  class YourExtension implements Scratch.Extension {
    getInfo() {
      return {
        id: 'newExtension',
        name: "FurryR's example extension",
        blocks: [
          {
            blockType: Scratch.BlockType.COMMAND,
            opcode: 'test',
            text: '1'
          }
        ]
      }
    }
    test(args: Record<string, string>, util: VM.BlockUtility) {
      console.log('Hello World', args, util)
    }
  }
  Scratch.extensions.register(new YourExtension())
})(Scratch)
