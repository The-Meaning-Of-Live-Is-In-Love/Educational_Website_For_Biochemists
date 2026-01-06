var Number_Task;
var Task;
var Task_Answer;
Number_Task = Math.floor(Math.random() * 27) + 1;
if (Number_Task == 1)
{
    Task = "Проведение нервного импульса.";
    Task_Answer = "Организменный уровень";
}
if (Number_Task == 2)
{
    Task = "Симбиоз рака отшельника и актинии.";
    Task_Answer = "Экосистемный уровень";
}
if (Number_Task == 3)
{
    Task = "Озеро как место обитания озёрной лягушки.";
    Task_Answer = "Экосистемный уровень";
}
if (Number_Task == 4)
{
    Task = "Круговорот воды.";
    Task_Answer = "Биосферный уровень";
}
if (Number_Task == 5)
{
    Task = "Репликация ДНК.";
    Task_Answer = "Молекулярный уровень";
}
if (Number_Task == 6)
{
    Task = "Нервная клетка (строение нейрона).";
    Task_Answer = "Клеточный уровень";
}
if (Number_Task == 7)
{
    Task = "Озимая пшеница, устойчивая к поражению грибами-паразитами.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 8)
{
    Task = "Эритроцит.";
    Task_Answer = "Клеточный уровень";
}
if (Number_Task == 9)
{
    Task = "Генофонд всех особей Байкальской нерпы.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 10)
{
    Task = "Таёжный лес.";
    Task_Answer = "Экосистемный уровень";
}
if (Number_Task == 11)
{
    Task = "Дыхательная система человека.";
    Task_Answer = "Организменный уровень";
}
if (Number_Task == 12)
{
    Task = "Митохондрия.";
    Task_Answer = "Клеточный уровень";
}
if (Number_Task == 13)
{
    Task = "Популяция зайцев в лесу.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 14)
{
    Task = "Одна мышь.";
    Task_Answer = "Организменный уровень";
}
if (Number_Task == 15)
{
    Task = "Группа африканских слонов, проживающих компактной группой.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 16)
{
    Task = "Биогенная миграция атомов.";
    Task_Answer = "Биосферный уровень";
}
if (Number_Task == 17)
{
    Task = "Сфагновое болото.";
    Task_Answer = "Экосистемный уровень";
}
if (Number_Task == 18)
{
    Task = "Электрон-транспортная цепь.";
    Task_Answer = "Молекулярный уровень";
}
if (Number_Task == 19)
{
    Task = "Крапива двудомная, проживающая на одной поляне.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 20)
{
    Task = "Симбиоз рака-отшельника и актинии на мелководном участке моря.";
    Task_Answer = "Экосистемный уровень";
}
if (Number_Task == 21)
{
    Task = "Разделение пищи между членами стаи волков.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 22)
{
    Task = "Брачный танец павлина.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 23)
{
    Task = "Установление иеархии внутри стаи волков.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 24)
{
    Task = "Уменьшение численности сосен в лесу в результати вспышки численности жука короеда.";
    Task_Answer = "Экосистемный уровень";
}
if (Number_Task == 25)
{
    Task = "Львиный прайд.";
    Task_Answer = "Популяционный уровень";
}
if (Number_Task == 26)
{
    Task = "Совокупность хромосом и генов рыжего лесного муравья.";
    Task_Answer = "Организменный уровень";
}
if (Number_Task == 27)
{
    Task = "Поддержание постоянства газового состава атмосферы живым веществом Земли.";
    Task_Answer = "Биосферный уровень";
}
document.write(Task);
function Answer (id) {
    Task_Answer_2 = document.getElementById(id).value;
    if(Task_Answer_2.toLowerCase() === Task_Answer.toLowerCase())
    {
        alert("Верно!");
    }
    else
    {
        alert("Неверно.");
    }
}