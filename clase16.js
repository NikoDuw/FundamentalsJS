var signo = prompt('Cual es tu signo Zodiacal, en minusculas');
console.log(signo);

switch (signo) {
    case 'libra':
        console.log('Mientras que ciertas personas piensan que eres fantástica, otras no sólo lo piensan... ¡lo saben! Sin embargo, esto podría explicar por qué no siempre están de acuerdo contigo. La envidia puede hacer que hasta la gente más agradable sea difícil de tratar. Para sentirse mejor, una persona que te ve tal y como eres realmente está intentando identificar tus defectos. Como le está costando trabajo hacerlo, se está poniendo cada vez más furiosa, lo que hace que a ti te resulte difícil plantarle cara. Si puedes ser amable con alguien que está causando problemas, vuestra relación mejorará.')
        break;
    case 'leo':
        console.log('Cuando tú misma crees en tu capacidad para llevar a cabo una tarea, las posibilidades de éxito aumentan exponencialmente. Sin embargo, ese tipo de creencia sólo viene si tienes una conciencia positiva de ti misma. Es necesario que creas que eres la persona adecuada, que tiene las habilidades precisas, que está en el lugar adecuado, en el momento oportuno. ¡Eres una Leo! No tienes que dudar de tus habilidades. Aunque tu confianza haya recibido un golpe, eres mucho más grande y poderosa que cualquier problema que esté haciendo que te sientas pequeña. Hoy confía en ti.')
    case 'tauro':
        console.log('Hay gente que ve conspiraciones por todas partes. Rastrean las profundidades más oscuras de Internet en busca de pruebas que apoyen su última teoría. Nada de lo que digamos conseguirá convencerles para que vean la luz, y cualquier intento al respecto suele ser recibido con hostilidad. Aunque hoy parezca que la confusión está acechando detrás de cada esquina, eso no quiere decir que haya venido para quedarse. Céntrate en el panorama general y descubrirás que los aspectos positivos superan a los negativos.')
    // agregar el resto de signos
    default:
        console.log('opcion invalida')
        break;
}

