// src/composables/useFetchImages.js
import { ref } from 'vue';

export function useFetchImages() {
    const jsonData = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const fetchImages = async (url) => {
        isLoading.value = true;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                jsonData.value = data.map(item => ({
                    id: item[0],
                    url: item[1],
                }));
            } else {
                error.value = `HTTP 错误: ${response.status}`;
            }
        } catch (err) {
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        jsonData,
        fetchImages,
        isLoading,
        error
    };
}
