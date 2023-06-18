export function domInjector(seletor: string) {
  return function (
    target: any,
    key: string
  ) {
    let elemento: HTMLElement

    function getter() {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor)
        return elemento
      }
      return elemento
    }

    Object.defineProperty(target, key, { get: getter })


  }
}