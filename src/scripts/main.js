/* eslint-disable */

/* import main scss file for webpack compiler */

import '../scss/main.scss';

/* general scripts */

/* ======================================================================================== */

const RAW_QUESTIONS = [
    '1) Em C, o cast de uma variável do tipo int para uma do tipo unsigned int altera o padrão de bits da variável..............................................ox',
    '2) Em C, numa expressão com variáveis do tipo int com e sem sinal, todas as variáveis são convertidas para valores sem sinal ..........................xo',
    '3) Em C, se tivermos um char com representação binária de 10011010, o cast para um short resulta no valor 1111111110011010 ........xo',
    '4) Admita um inteiro x com valor 0x01234567 e um valor dado por &x de 0x100. Logo, o valor presente no byte 0x101 é 0x45..................xo',
    '5) Em C, a adição de duas variáveis do tipo int com valores positivos nunca pode resultar num valor negativo ....................................................ox',
    '6) Em C, a operação u<<k resulta em u*2k, independentemente da variável u ter ou não sinal ...............................................................................xo',
    '7) Em Assembly, a instrução movl %eax, (%esp) pode ser usada para escrever o valor de %eax no topo da stack .........................................xo',
    '8) Em Assembly, a instrução cmp não altera os seus parâmetros nem os bits do registo EFLAGS ............................................................................ox',
    '9) Admita que o endereço de uma variável x está armazenado em %edi. É possível alterar o valor de x executando movl $15,%edi .............ox',
    '10) A instrução movl 4(%ebp),%eax armazena em %eax o valor antigo de %ebp numa função que inicia com o prólogo estudado ..............ox',
    '11) Admita que o endereço de um vetor do tipo int está armazenado em %esi e que o valor de %ecx é 2. A instrução leal (%esi,%ecx,4),%esi armazena em %esi o endereço do terceiro elemento do vetor. .......................................................................................xo',
    '12) A execução da instrução call não implica a alteração do valor do registo %esp................................................................................................ox',
    '13) Não é possível passar o endereço de uma variável local para outra função chamada pela primeira usando a stack .............................................ox',
    '14) Depois de um call de uma função com 3 parâmetros inteiros podemos executar subl $12, %esp para retirar os parâmetros da stack .......ox',
    '15) A convenção de salvaguarda de registos indica que o registo %esi deve ser gerido pela função invocada.........................................................xo',
    '16) Admita a declaração da matriz int m[4][5]. Em Assembly, o endereço do elemento m[i][j] é dado pela expressão m+20*i+4*j ....xo',
    '17) Uma estrutura, alinhada de acordo com as regras estudadas, com um vector de 2 char, 1 int e 1 short (por esta ordem) ocupa 8 bytes....ox',
    '18) O espaço ocupado por uma estutura alinhada é sempre o mesmo, independemente da ordem dos seus campos..................................................ox',
    '19) O espaço ocupado por uma union é sempre o mesmo, independentemente da ordem dos seus campos...............................................................xo',
    '20) O compilador não tem qualquer dificuldade em mover a invocação de funções para outro local do programa com vista à sua optimização .....ox',
    '1) Em C, o cast de uma variável do tipo int para uma do tipo float altera o padrão de bits da variável...............................................................xo',
    '2) Em C, o cast implícito em determinadas situações de variáveis com sinal para valores sem sinal pode levar a bugs no programa.......................xo',
    '3) Admita um int x com valor 0x01234567 e um valor dado por &x de 0x100. Logo, o valor presente no byte 0x100 é 0x67 ....................xo',
    '4) Em C, se tivermos uma variável x do tipo short com o valor 0x1234, o valor –0x1234 pode ser obtido através de ~x + 1......................xo',
    '5) Em C, a adição de duas variáveis u e v do tipo int tem como resultado (u+v) mod 32.................................................................................xo',
    '6) Em C, é garantido que o resultado de uma divisão inteira por 2k, obtida através de u >> k, é correctamente arredondado se u<0 ..................ox',
    '7) Admita que ptr é uma variável do tipo char*. Então, a expressão (int*)ptr + 7 avança 28 bytes na memória.......................................xo',
    '8) Em Assembly, a instrução movb (%esi), (%edi) permite copiar um byte para uma nova posição de memória numa única instrução ......ox',
    '9) Em Assembly, o resultado das instruções de salto condicional depende do valor dos bits do registo EFLAGS.....................................................xo',
    '10) Admita que %edi e int *ptr armazenam o endereço do inteiro x. Então, movl $1,(%edi) é o equivalente a *ptr = 1 em C ........xo',
    '11) Os parâmetros de uma função não podem ser acedidos usando o registo %esp em vez do %ebp como base do endereçamento .......................ox',
    '12) Admita 0xF000 e 0x0100 em %edx e %ecx, respetivamente. leal (%edx,%ecx,4),%esi armazena em %esi o valor 0xF400. ....xo',
    '13) Em IA32 é usada a stack para armazenar o valor de retorno de uma função, à semelhança do que acontece com o seu endereço de retorno.....ox',
    '14) Admita que o valor de %esp é 0x100C. A execução da instrução ret coloca o valor de %esp em 0x1010..................................................xo',
    '15) Os registo%eaxé local a cada uma das funções, o que dispensa qualquer cuidado no seu uso entre invocações de funções.............................ox',
    '16) Admita a matriz global short int m[5][3]. Em Assembly, acedemos ao valor de m[3][0] avançando 18 bytes a partir de m .............xo',
    '17) Uma estrutura, alinhada de acordo com as regras estudadas, com um vector de 2 char, 1 int e 1 short (por esta ordem) ocupa 12 bytes..xo',
    '18) É sempre possível diminuir o tamanho de um estrutura alinhada alterando a ordem dos seus campos................................................................ox',
    '19) É possível redimensionar, com a função realloc, o tamanho um vetor de inteiros vec declarado estaticamente com int vec[10]........ox',
    '20) A possibilidade de existirem diversas referências para a mesma posição de memória dificulta a optimização efectuada pelo compilador.........xo',
    '1) Admita a variável unsigned char x em C. O valor armazenado em x depois de executar “x = -1; x = x >> 1;” é 127................xo',
    '2) As operações aritméticas de soma e subtracção de inteiros têm uma implementação diferente em hardware para valores com e sem sinal........ox',
    '3) Em IA32, uma arquitetura little-endian, considerando o vetorshortx[10],o elementox[1]está num endereço menor quex[0]..........ox',
    '4) O vetor “int *vec = (int*)malloc(16);” pode armazenar 16 inteiros tal como se tivesse sido definido como “int vec[16];” .ox',
    '5) Em C, a multiplicação de duas variáveis u e v do tipo int pode resultar num valor menor do que os armazenados em u ou v........................xo',
    '6) Em C, as expressões “x * 35” e “(x<<5) + (x<<2) – x” são sempre equivalentes para qualquer valor de unsigned int x ..........xo',
    '7) Admita queptré uma variável do tipochar*. Então, em C, a expressão(short*)ptr + 7avança 14 bytes na memória......................xo',
    '8) Admita que declara a variável int x na função main em C. O compilador pode atribuir x a um registo ou a um endereço na heap ................ox',
    '9) Em Assembly, a instrução “imull %edx” duplica o valor do registo usado como argumento.......................................................................ox',
    '10) Em Assembly, a instrução “pushl %eax” é equivalente a “movl %eax, (%esp)” seguido de “addl $-4, %esp” .........................ox',
    '11) A adição de dois bytes com sinal com valores 0xAC e 0x8A deixa as flags do registo EFLAGS com os valores ZF=0, SF=1, CF=1, OF=1....ox',
    '12) Em IA32, a instrução test compara o valor dos seus operandos através de um subtração............................................................................ox',
    '13) Em IA32, a stack é usada para suportar a invocação de funções e o retorno para a função invocadora com call e ret, respetivamente........xo',
    '14) Admita que o valor de %esp é 0x1000. A execução da instrução jmp coloca o valor de %esp em 0xFFC.................................................ox',
    '15) De acordo com a convenção usada em Linux/IA32, a responsabilidade de salvaguarda e restauro de %esi é da função invocada ..................xo',
    '16) Admita a matriz global short m[10][3]. Em Assembly, acedemos ao valor de m[3][1] avançando 20 bytes a partir de m...................xo',
    '17) Uma estrutura, alinhada de acordo com as regras estudadas, com 2 int, um vetor de 7 char e 1 short (por esta ordem) ocupa 20 bytes ....xo',
    '18) O tamanho de uma union sujeita a alinhamento pode ser menor se indicarmos os seus campos por ordem crescente do seu tamanho..............ox',
    '19) A fragmentação da heap pode impedir a alocação de um novo bloco mesmo que exista esse número de bytes livres......................................xo',
    '20) A invocação de funções introduz overhead e limita as possibilidades de otimização dos programas pelo compilador .....................................xo',
    '1) Em C, o maior valor que podemos armazenar numa variável do tipo int é 232 .....................................................................................................ox',
    '2) Admita a variável unsigned int a = 0xFFFFFFFF em C. Então, a variável unsigned int b = a + 1 tem o valor zero ............xo',
    '3) Admita a variávelshorta=0x0123e um valor dado por&ade0x200em C. Então, o valor presente no byte0x201é0x01..................xo',
    '4) Em C, ao truncarmos uma variável do tipo int que armazena um valor positivo para um short podemos ficar com um valor negativo .........xo',
    '5) Em C, o operador lógico || (OR) termina a avaliação da expressão se encontrar uma condição que seja avaliada como verdade..........................xo',
    '6) Em C, as divisões de inteiros usando deslocamentos podem exigir a alteração do dividendo para que o arredondamento seja correto ................xo',
    '7) Admita que int *ptr armazena endereço inicial de um vetor de int. Logo, (short*)ptr + 8 aponta para o quinto elemento .............xo',
    '8) Admita que declara a variável int x como variável global em C. Logo, os 4 bytes são reservados na stack ......................................................ox',
    '9) Em C, é possível retornar como valor de saída de uma função o endereço de um vetor short *vec = (short*)malloc(20)..............xo',
    '10) Em Assembly, a instrução popl %eax é equivalente a executar movl (%esp),%eax seguido de addl $4, %esp ..............................xo',
    '11) Em Assembly, a instrução leal (%eax,%eax,4),%eax pode ser usada para multiplicar por 5 o valor em %eax.....................................xo',
    '12) Se %ecx for 4 e %esi o endereço inicial de um vetor de short, movw 6(%esi,%ecx,2),%ax coloca em %ax o oitavo elemento. .......xo',
    '13) Em IA32, a stack é usada para suportar a passagem do valor de retorno de uma função invocada à função invocadora .....................................ox',
    '14) Admita que o valor de %esp é 0x1004. A execução da instrução ret coloca o valor de %esp em 0x1000..................................................ox',
    '15) Em IA32, reservamos espaço para as variáveis locais de uma função subtraindo o número de bytes necessários ao valor atual de%ebp.........ox',
    '16) Admita a matriz global int m[4][5]. Em Assembly, acedemos ao endereço de m[i] calculando m + i*20 ...........................................xo',
    '17) Uma estrutura, alinhada de acordo com as regras estudadas, com 1 char, 1 double e um 1 char* (por esta ordem) ocupa 16 bytes............xo',
    '18) O tamanho de uma estrutura é garantidamente menor se indicarmos os seus campos por ordem decrescente do seu tamanho ...........................ox',
    '19) A fragmentação interna dos blocos reservados na heap é originada pelas regras de alinhamento e overhead da gestão dos blocos....................xo',
    '20) A possibilidade de existirem diversas referências para a mesma posição de memória em C dificulta a otimização efetuada pelo compilador...xo',
    '1) Em C, admita a variável “char x = -1;”. Logo, o valor armazenado em “char y = (unsigned)x >> 1;” é 127...........................xo',
    '2) Em C, a operação u << k tem sempre como resultado u * 2k, para valores inteiros de u com ou sem sinal e 0 < k <= 31....................xo',
    '3) Em C, admita a variável “unsigned int x=0x12345678;” cujo endereço é 0x100. Logo, o valor presente no byte 0x102 é 0x34....xo',
    '4) Em C, a função malloc permite-nos reservar blocos de memória na stack em tempo de execução que podem ser depois redimensionados.....ox',
    '5) Em C, quando a soma aritmética de duas variáveisuevdo tipointé superior a231 o valor obtido é equivalente au + v - 231..............xo',
    '6) Em C, a divisão correta de um inteiro negativo x por 2k através de um deslocamento deve ser obtida com “(x+(1<<k)-1)>>k”................xo',
    '7) Em C, admita um vetor “int vec[10];” e um apontador “short *ptr = (short*)vec”. Então, ptr + 4 avança para vec[2]......xo',
    '8) Em C, é correto retornar como valor de saída de uma função o endereço de um bloco de memória reservado na heap dentro da função............ox',
    '9) Em Assembly, o equivalente a “*ptr1 = *ptr2”, apontadores do tipo int* em C, pode ser obtido com “movl (%eax),(%ebx)” .....ox',
    '10) Em Assembly, a instrução “popl %eax” é equivalente a “movl (%esp),%eax” seguido de “addl $4,%esp” ..................................xo',
    '11) Em Assembly, as operações de multiplicação e divisão de inteiros têm instruções diferentes para valores com e sem sinal.............................xo',
    '12) A adição de dois bytes com sinal com valores $127 e $10 deixa as flags do registo EFLAGS com os valores ZF=0, SF=1, CF=0, OF=1.. ...xo',
    '13) Em IA32, a stack é usada para suportar o retorno do valor de saída de uma função, tal como acontece com o controlo de fluxo .....................ox',
    '14) Em IA32, admita que o valor de%espé0x1004. A execução da instrução “call func” coloca o valor de%espem0x1000...............xo',
    '15) De acordo com a convenção usada em Linux/IA32, a responsabilidade da salvaguarda e restauro de %edx é da função invocadora ...............xo',
    '16) Admita a matriz global int m[10][3]. Em Assembly, acedemos ao valor de m[3][1] avançando 40 bytes a partir de m........................xo',
    '17) Uma estrutura, alinhada de acordo com as regras estudadas, com 2 char, um vetor de 5 int e 1 short (por esta ordem) ocupa 24 bytes ....ox',
    '18) O tamanho de uma estrutura sujeita a alinhamento tem de ser múltiplo da menor restrição de alinhamento dos seus campos ..........................ox',
    '19) O tamanho de um bloco reservado na heap pode ser maior do que o número de bytes passados por parâmetro na função malloc.................xo',
    '20) A invocação de funções introduz overhead e limita as possibilidades de otimização dos programas por parte do compilador..........................xo',
    '1) Em C, o valor de um apontador é o endereço do primeiro byte do bloco de memória para o qual aponta..........................................................xo',
    '2) Em C, o tipo de dados do apontador determina o espaço em memória necessário para o armazenar .................................................................ox',
    '3) Em C, admita a variável “unsigned char x;”. O maior valor positivo que podemos armazenar em x é 27 - 1 ..........................................ox',
    '4) Em C, um cast para char de uma variável do tipo unsigned short com um valor positivo pode resultar num valor negativo ..................xo',
    '5) Em C, as operações aritméticas com qualquer tipo de dados para valores inteiros seguem as regras da aritmética modular ..............................xo',
    '6) Em C, admita as variáveis “intx=0xABCD;” e “char *ptr=&x”. Logo, “printf(“%hhX”,*(ptr+1));” imprime o valor0xCD...ox',
    '7) Em C, “x >> 2” aplica um deslocamento lógico para a direita se x for do tipo unsigned int e um aritmético se x for do tipo int.........xo',
    '8) Em C, admita o vetor “short vec[5];”. A função realloc permite alterar o tamanho de vec para armazenar mais elementos ..............ox',
    '9) Em Assembly, qualquer que seja o valor armazenado em %eax, o resultado de “sall $4,%eax” e “shll $4,%eax” é o mesmo............xo',
    '10) Em Assembly, depois do prólogo de uma função, o valor antigo de %ebp pode ser encontrado em (%esp).................................................xo',
    '11) Em Assembly, reservar 8 bytes para variáveis locais de uma função pode ser conseguido com “addl $8,%esp”.......................................ox',
    '12) Em IA32, a stack é usada para suportar o retorno do valor de saída de uma função, tal como acontece com o controlo de fluxo......................ox',
    '13) Em IA32, a execução da instrução ret não altera o valor de qualquer registo ..............................................................................................ox',
    '14) Em IA32, o resultado da instrução “jmp func” depende do valor dos bits do registo EFLAGS ..................................................................ox',
    '15) De acordo com a convenção usada em Linux/IA32, uma função pode usar %edx sem a necessidade de o salvaguardar e restaurar.................xo',
    '16) Admita uma matriz de inteiros alocada na heap dentro de uma função. O seu espaço é automaticamente libertado no fim da função ..............ox',
    '17) As restrições de alinhamento em memória contribuem para a possível fragmentação interna de um bloco reservado na heap .........................xo',
    '18) O tamanho de uma estrutura sujeita a alinhamento é sempre o mesmo em IA32 e x86-64, independentemente dos seus campos.....................ox',
    '19) O endereço inicial de uma estrutura sujeita a alinhamento depende dos tipos de dados dos seus campos........................................................xo',
    '20) A técnica de otimização de programas que move código para fora de um ciclo é denominada “loop unrolling”..............................................ox',
];

const CURATED_QUESTIONS = [];

RAW_QUESTIONS.forEach((q) => {
    CURATED_QUESTIONS.push({
        text: q.substr(3).trim().slice(0, - 2).trim(),
        solution: q.endsWith('xo') ? 'V' : 'F',
    })
});

let plays = 0;
let correctas = 0;
let currentQuestion = CURATED_QUESTIONS[getRandom()];


function getNext() {
    currentQuestion = CURATED_QUESTIONS[getRandom()];

    $('#buttonTrue').show();
    $('#buttonFalse').show();
    $('#buttonNext').hide();

    $('#question').text(currentQuestion.text);
    $('#answer').text('A resposta correcta era: ' + currentQuestion.solution);
}

function update() {
    $('#plays').text(plays);
    $('#correctas').text(correctas);
    $('#buttonTrue').hide();
    $('#buttonFalse').hide();
    $('#buttonNext').show();
}

getNext();

$('#buttonTrue').on('click', () => {
    if(currentQuestion.solution === 'V') {
        plays++;
        correctas++;
    } else {
        plays++;
    }
    update();
});

$('#buttonFalse').on('click', () => {
    if(currentQuestion.solution === 'F') {
        plays++;
        correctas++;
    } else {
        plays++;
    }
    update();
});


$('#buttonNext').on('click', () => {
    getNext();
});




function getRandom() {
    return Math.floor(Math.random() * (CURATED_QUESTIONS.length - 1));
}