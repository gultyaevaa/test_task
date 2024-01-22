const clickOutside = {
    mounted: (element, binding) => {
        element.clickOutsideEvent = (event) => {
            if (!(element === event.target || element.contains(event.target))) {
                binding.value();
            }
        }
        document.addEventListener('click', element.clickOutsideEvent);
    },
    unmounted: (element) => {
        document.removeEventListener('click', element.clickOutsideEvent);
    }
}

export default clickOutside;