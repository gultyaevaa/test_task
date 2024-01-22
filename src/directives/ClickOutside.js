const clickOutside = {
    mounted: (element, binding) => {
        console.log('binding, ' + binding);
        element.clickOutsideEvent = () => {
            binding.value();
        }
        document.addEventListener('click', element.clickOutsideEvent);
    },
    unmounted: (element) => {
        document.removeEventListener('click', element.clickOutsideEvent);
    }
}

export default clickOutside;