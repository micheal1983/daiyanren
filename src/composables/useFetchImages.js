// src/composables/useFetchImages.js
import { ref } from 'vue';
import { IMAGE_BASE_URL } from '../config'; // 导入公共配置

export function useFetchImages() {
    const jsonData = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    const fetchImages = async (url, postData = {}) => {
        isLoading.value = true;
        error.value = null;

        // 根据 POST 参数提取类型 (gz, tg, ng) 以确定图片路径
        const type = postData.type || 'gz';
        const currentPrefix = `${IMAGE_BASE_URL}/games/${type}/`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData) // 将参数对象转为 JSON 字符串
            });

            if (response.ok) {
                const result = await response.json();
                // API响应包含一个 'data' 属性，它是一个游戏对象数组
                const items = result.data || [];
                jsonData.value = items.map(item => {
                    try {
                        // 'info' 字段是一个JSON字符串，需要解析
                        const info = typeof item.info === 'string' ? JSON.parse(item.info) : item.info;
                        return {
                            id: item.id,
                            url: currentPrefix + info.cover,
                        };
                    } catch (e) {
                        console.error(`解析 item.info 失败 (ID: ${item.id}):`, item.info, e);
                        return null; // 解析失败时返回null
                    }
                }).filter(Boolean); // 过滤掉解析失败的项目
            } else {
                error.value = `HTTP 错误: ${response.status}`;
            }
        } catch (err) {
            console.error('获取或解析图片数据失败:', err);
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
