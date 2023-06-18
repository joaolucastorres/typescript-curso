export function domInjector(seletor) {
    return function (target, key) {
        let elemento;
        function getter() {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                return elemento;
            }
            return elemento;
        }
        Object.defineProperty(target, key, { get: getter });
    };
}
