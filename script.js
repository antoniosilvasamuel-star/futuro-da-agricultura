// Simulador de Gestão Agrícola do Futuro (AgroTech 2026)

// Configurações ideais para o cultivo de alface hidropônica
const parametrosIdeais = {
    temperatura: 22, // em graus Celsius
    umidade: 65,     // em porcentagem
    nivelNutrientes: 80 // em porcentagem
};

// Estado atual dos sensores (valores iniciais)
let statusSensores = {
    temperatura: 21.5,
    umidade: 62,
    nivelNutrientes: 78
};

// Função para simular a variação do ambiente
function atualizarSensores() {
    // Adiciona ou subtrai uma pequena variação aleatória
    statusSensores.temperatura += (Math.random() - 0.5) * 2;
    statusSensores.umidade += (Math.random() - 0.5) * 5;
    statusSensores.nivelNutrientes -= Math.random() * 1.5; // Nutrientes são consumidos com o tempo
}

// Sistema de Tomada de Decisão IA (Automação)
function aplicarCorrecoes() {
    console.log("\n--- Executando Análise de IA ---");
    
    // Verificação de Temperatura
    if (statusSensores.temperatura > parametrosIdeais.temperatura + 2) {
        console.log("⚠️ Alerta: Temperatura alta! Ativando sistema de arrefecimento.");
        statusSensores.temperatura -= 1.5;
    } else if (statusSensores.temperatura < parametrosIdeais.temperatura - 2) {
        console.log("⚠️ Alerta: Temperatura baixa! Ativando aquecedores LED.");
        statusSensores.temperatura += 1.5;
    } else {
        console.log("✅ Temperatura estável.");
    }

    // Verificação de Umidade
    if (statusSensores.umidade < parametrosIdeais.umidade - 5) {
        console.log("⚠️ Alerta: Solo/Ar seco! Ativando irrigação de precisão (gotejamento).");
        statusSensores.umidade += 8;
    } else {
        console.log("✅ Umidade adequada.");
    }

    // Verificação de Nutrientes
    if (statusSensores.nivelNutrientes < 70) {
        console.log("⚠️ Alerta: Nutrientes baixos! Injetando solução NPK automatizada.");
        statusSensores.nivelNutrientes = parametrosIdeais.nivelNutrientes;
    } else {
        console.log("✅ Nível de nutrientes otimizado.");
    }
}

// Painel de exibição dos dados
function exibirPainel() {
    console.log("\n=====================================");
    console.log(`📊 PAINEL AGROTECH - ${new Date().toLocaleTimeString()}`);
    console.log("=====================================");
    console.log(`🌡️ Temperatura: ${statusSensores.temperatura.toFixed(1)}°C`);
    console.log(`💧 Umidade: ${statusSensores.umidade.toFixed(1)}%`);
    console.log(`🧪 Nutrientes: ${statusSensores.nivelNutrientes.toFixed(1)}%`);
    console.log("=====================================");
}

// Ciclo de funcionamento da fazenda do futuro
function iniciarFazenda() {
    console.log("🌱 Inicializando sistema de agricultura autônoma...");
    
    // Executa o monitoramento a cada 3 segundos
    setInterval(() => {
        atualizarSensores();
        exibirPainel();
        aplicarCorrecoes();
    }, 3000);
}

// Iniciar a simulação
iniciarFazenda();
