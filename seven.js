// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// []()
const block = document.querySelectorAll('.super-dropdown');
const item= document.querySelectorAll('dropdown-item');
block.className='dropdown-item';
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// []()
const classs = document.querySelectorAll('.btn');
// 4. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()
if  (item.id = 'dropdownMenuButton')
{
    item.id = '.superDropdown'
}
else
{
    item.id=item.id
}
console.log(item.id)
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// []()
// 5. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()
// 6. Удалите атрибут type у элемента с классом "dropdown-toggle