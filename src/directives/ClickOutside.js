const clickOutside = {
    mounted: (element, binding) => {
        const excludeElements = binding.value.excludeElements;
        excludeElements.push(element);
        const handler = binding.value.handler;
        element.clickOutsideEvent = (event) => {
            if (!(excludeElements.some(el => el === event.target || el.contains(event.target)))) {
                handler();
            }
        }
        document.addEventListener('click', element.clickOutsideEvent);
    },
    unmounted: (element) => {
        document.removeEventListener('click', element.clickOutsideEvent);
    }
}

export default clickOutside;