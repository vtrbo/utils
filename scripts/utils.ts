import process from 'node:process'
import shell from 'shelljs'

export function runCommand(command: string, dir = process.cwd(), options: Record<string, any> = {}) {
  return new Promise((resolve, reject) => {
    try {
      shell.exec(
        command,
        {
          cwd: dir,
          shell: true,
          encoding: 'GBK',
          async: true,
          silent: options?.silent === undefined ? true : options?.silent,
          ...options,
        } as Record<string, any>,
        (code, output, error) => {
          if (code === 0)
            resolve(true)
          else if (error)
            reject(error)

          const outputStr = output.toString()
          if (outputStr && !(options?.silent ?? true))
            console.log(outputStr)
        },
      )
    }
    catch (error) {
      reject((error as any).message)
    }
  })
}
