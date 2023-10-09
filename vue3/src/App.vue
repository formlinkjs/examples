<script setup lang="ts">
import { Form } from 'formlink';
import { reactive } from 'vue';

const form = reactive(new Form({
    name: '',
    username: '',
    email: '',
    photo: '',
}));

const updateUserProfile = () => {
    form.put('/register', {
        __method: 'PUT',
        onSuccess: () => console.log('success'),
        onError: () => console.log('error'),
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>

        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
</template>
