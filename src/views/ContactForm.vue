<template>
    <div class="page">
        <h4>Thêm mới Liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="create" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue';
import contactService from '@/services/contact.service';
export default {
    components: {
        ContactForm,
    },
    props: {
        id: { type: String, required: false },
    },
    data() {
        return {
            contact: {},
            message: "",
        };
    },
    methods: {
        async create(data) {
            try {
                await contactService.create(data);
                alert('Thêm liên hệ mới thành công!.');
                this.$router.push({ name: "contactbook" });
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.message = "";
    },
};
</script>