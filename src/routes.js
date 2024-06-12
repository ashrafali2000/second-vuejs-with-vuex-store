import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import PageNotFound from "./components/PageNotFound.vue";
import SignInView from "./views/SignInView.vue";
import ProductView from "./views/ProductView.vue";
const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/sign-in",
    component: SignInView,
  },
  {
    path: "/products",
    component: ProductView,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
