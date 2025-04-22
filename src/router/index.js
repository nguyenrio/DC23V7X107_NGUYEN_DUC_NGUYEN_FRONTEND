import { createRouter, createWebHistory } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true, // Truyền $route.params dưới dạng props vào component
  },

  {
    path: "/contacts/new",
    name: "contact.add",
    component: () => import("@/views/ContactForm.vue"),
    props: { id: null }, // Đặt id = null khi thêm mới
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"), // Đảm bảo BASE_URL có giá trị mặc định là '/'
  routes,
});

export default router;
