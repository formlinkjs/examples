<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Form, type Response } from 'formlink';
import Profile from './components/Profile.vue';

const form = Form.create();
const user = ref<object>({});

onMounted(() => getUser());

const getUser = () => {
    form.get('http://localhost:3000/api/users/1', {
        onSuccess: ({ data }: Response) => user.value = data,
    });
};
</script>

<template>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <Profile :user="user" />
        </div>
    </div>
</template>
