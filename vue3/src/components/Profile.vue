<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/solid';
import { Form, type FormInterface, type ErrorResponse, type Response } from 'formlink';
import { reactive } from 'vue';

const props = defineProps<{ user: any; }>();

const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Mexico',
];

const form = reactive<FormInterface>(new Form(props.user));

const update = () => {
    form.put('/api/user/1', {
        onSuccess: (response: Response) => alert(response.data.message),
        onFail: (error: ErrorResponse) => alert(error.response?.data),
        onFinish: () => console.log('Finished!'),
    });
};
</script>

<template>
    <form @submit.prevent="update">
        <div class="space-y-6">
            <div class="border-b border-slate-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-slate-900">Profile</h2>
                <p class="mt-1 text-sm leading-6 text-slate-600">This information will be displayed publicly so be careful what you share.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="col-span-full">
                        <label for="photo" class="block text-sm font-medium leading-6 text-slate-900">Photo</label>
                        <div class="mt-2 flex items-center gap-x-3">
                            <UserCircleIcon class="h-12 w-12 text-slate-300" aria-hidden="true" />
                            <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">Change</button>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-slate-900">Username</label>
                        <div class="mt-2">
                            <div class="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                                <span class="flex select-none items-center pl-3 text-slate-400 sm:text-sm">workcation.com/</span>
                                <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" v-model="form.data.username" />
                            </div>
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="about" class="block text-sm font-medium leading-6 text-slate-900">About</label>
                        <div class="mt-2">
                            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" v-model="form.data.about" />
                        </div>
                        <p class="mt-3 text-sm leading-6 text-slate-500">Write a few sentences about yourself.</p>
                    </div>
                </div>
            </div>

            <div class="border-b border-slate-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-slate-900">Personal Information</h2>
                <p class="mt-1 text-sm leading-6 text-slate-600">Use a permanent address where you can receive mail.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="firstName" class="block text-sm font-medium leading-6 text-slate-900">First name</label>
                        <div class="mt-2">
                            <input type="text" name="firstName" id="firstName" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" v-model="form.data.firstName" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="lastName" class="block text-sm font-medium leading-6 text-slate-900">Last name</label>
                        <div class="mt-2">
                            <input type="text" name="lastName" id="lastName" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" v-model="form.data.lastName" />
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-slate-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" v-model="form.data.email" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-slate-900">Country</label>
                        <div class="mt-2">
                            <select id="country" name="country" v-model="form.data.country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option v-for="(country, index) in countries" :key="index" :value="country">{{ country }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="street" class="block text-sm font-medium leading-6 text-slate-900">Street address</label>
                        <div class="mt-2">
                            <input type="text" name="street" v-model="form.data.street" id="street" autocomplete="street" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="city" class="block text-sm font-medium leading-6 text-slate-900">City</label>
                        <div class="mt-2">
                            <input type="text" name="city" v-model="form.data.city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium leading-6 text-slate-900">State / Province</label>
                        <div class="mt-2">
                            <input type="text" name="region" v-model="form.data.region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="postalcode" class="block text-sm font-medium leading-6 text-slate-900">ZIP / Postal code</label>
                        <div class="mt-2">
                            <input type="text" name="postalcode" v-model="form.data.postalcode" id="postalcode" autocomplete="postalcode" class="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-b border-slate-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-slate-900">Notifications</h2>
                <p class="mt-1 text-sm leading-6 text-slate-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

                <div class="mt-10 space-y-10">
                    <fieldset>
                        <legend class="text-sm font-semibold leading-6 text-slate-900">By Email</legend>
                        <div class="mt-6 space-y-6">
                            <div class="relative flex gap-x-3">
                                <div class="flex h-6 items-center">
                                    <input id="comments" name="comments" v-model="form.data.comments" type="checkbox" class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                                </div>

                                <div class="text-sm leading-6">
                                    <label for="comments" class="font-medium text-slate-900">Comments</label>
                                    <p class="text-slate-500">Get notified when someones posts a comment on a posting.</p>
                                </div>
                            </div>

                            <div class="relative flex gap-x-3">
                                <div class="flex h-6 items-center">
                                    <input id="candidates" name="candidates" v-model="form.data.candidates" type="checkbox" class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                                </div>

                                <div class="text-sm leading-6">
                                    <label for="candidates" class="font-medium text-slate-900">Candidates</label>
                                    <p class="text-slate-500">Get notified when a candidate applies for a job.</p>
                                </div>
                            </div>

                            <div class="relative flex gap-x-3">
                                <div class="flex h-6 items-center">
                                <input id="offers" name="offers" type="checkbox" v-model="form.data.offers" class="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                            </div>

                            <div class="text-sm leading-6">
                                <label for="offers" class="font-medium text-slate-900">Offers</label>
                                <p class="text-slate-500">Get notified when a candidate accepts or rejects an offer.</p>
                            </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend class="text-sm font-semibold leading-6 text-slate-900">Push Notifications</legend>
                        <p class="mt-1 text-sm leading-6 text-slate-600">These are delivered via SMS to your mobile phone.</p>
                        <div class="mt-6 space-y-6">
                            <div class="flex items-center gap-x-3">
                                <input v-model="form.data.pushNotifications" value="everything" id="everything" name="pushNotifications" type="radio" class="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-600" />
                                <label for="everything" class="block text-sm font-medium leading-6 text-slate-900">Everything</label>
                            </div>

                            <div class="flex items-center gap-x-3">
                                <input v-model="form.data.pushNotifications" value="pemail" id="pemail" name="pushNotifications" type="radio" class="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-600" />
                                <label for="pemail" class="block text-sm font-medium leading-6 text-slate-900">Same as email</label>
                            </div>

                            <div class="flex items-center gap-x-3">
                                <input v-model="form.data.pushNotifications" value="nothing" id="nothing" name="pushNotifications" type="radio" class="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-600" />
                                <label for="nothing" class="block text-sm font-medium leading-6 text-slate-900">No push notifications</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-slate-900">Cancel</button>
            <button type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Save</button>
        </div>
    </form>
</template>
