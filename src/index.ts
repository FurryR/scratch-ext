;(function (Scratch) {
  if (Scratch.extensions.unsandboxed === false) {
    throw new Error('Sandboxed mode is not supported')
  }
  // Your extension's code
  class YourExtension implements Scratch.Extension {
    runtime: VM.Runtime
    constructor(runtime: VM.Runtime) {
      this.runtime = runtime
    }
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
  // The following snippet ensures compatibility with Turbowarp / Gandi IDE. If you want to write Turbowarp-only or Gandi-IDE code, please remove corresponding code
  if (Scratch.vm?.runtime) {
    // For Turbowarp
    Scratch.extensions.register(new YourExtension(Scratch.runtime))
  } else {
    // For Gandi
    window.tempExt = {
      Extension: YourExtension,
      info: {
        extensionId: 'newExtension',
        name: 'newExtension.name',
        description: 'newExtension.description',
        featured: true,
        disabled: false,
        collaboratorList: [
          {
            collaborator: 'FurryR',
            collaboratorURL: 'https://github.com/FurryR'
          }
        ]
      },
      l10n: {
        'zh-cn': {
          'newExtension.name': 'FurryR 的示例扩展',
          'newExtension.description': 'Gandi 扩展开发模板'
        },
        en: {
          'newExtension.name': "FurryR's example extension",
          'newExtension.description': 'Gandi extension development template'
        }
      }
    }
  }
})(Scratch)
