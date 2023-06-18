export function escapar(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value
  descriptor.value = function (...args: any[]) {
    let retorno = metodoOriginal.apply(this, args)
    if (typeof retorno === "string") {
      //console.log(`@Escape em ação na classe "${this.constructor.name}" no método "${key}" `)
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return retorno
  }
  return descriptor
}