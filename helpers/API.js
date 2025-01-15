import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const ligarLuzes = async (status, dispositivo) => {
    try {
        const response = await api.post('/api/ligar-luzes', {
            status: status,
            dispositivo: dispositivo
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao ligar luzes:', error);
        throw error;
    }
};


export const outraAcao = async (dados) => {
    try {
        const response = await api.post('/outra-acao', dados);
        return response.data;
    } catch (error) {
        console.error('Erro ao realizar outra ação:', error);
        throw error;
    }
};

export default api;
