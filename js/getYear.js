document.addEventListener('DOMContentLoaded', () => {
    const year_element = document.getElementById('year');
    year_element.textContent = new Date().getFullYear(); // JS has date constructor with getFulLYear();
    displayStaff(staff_data);
});