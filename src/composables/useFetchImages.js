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
                document.querySelector('.loading').style.display = 'none';
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
            // 隐藏所有 .loading
            document.querySelectorAll('.loading').forEach(el => {
                //el.style.display = 'none';        // 或者 el.classList.add('hide')
                el.classList.add('hide');
                setTimeout(() => (el.style.display = 'none'), 400);
            });
        }
    };

    return {
        jsonData,
        fetchImages,
        isLoading,
        error
    };
}
