<script setup>
import { ref, onMounted } from "vue";
import { navLinks } from "../../constants/navLinks";
import { useRouter } from "vue-router";

const navlink = ref(navLinks);
const role = ref("");
const modal = ref(false);

const toggleModal = () => (modal.value = !modal.value);

const router = useRouter();

const logout = () => {
  localStorage.clear();
  router.push({ name: "login" });
};
</script>

<template>
  <div>
    <button
      @click="toggleModal"
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg sm:hidden hover:text-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-gray-600"
    >
      <span class="sr-only"></span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="default-sidebar"
      :class="
        !modal
          ? 'fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0'
          : 'hidden'
      "
      aria-label="Sidebar"
    >
    <!-- <button @click="toggleModal" class="w-[36px] text-[18px] h-[36px] mx-[270px] my-[20px] absolute text-[#7EBA34] px-2 py-1 bg-[#E5F1D6] rounded-lg"><i class='bx bx-chevron-left'></i></button> -->
      <div class="h-[100%] px-[20px] overflow-y-auto bg-[#F4F4F4] py-[40px]">
        <img src="../../assets/images/logo.svg" alt="logo" class="w-[150px] h-[70px] mt-[20px]">
        <div class="flex justify-between items-center relative">
        </div>
        <ul class="space-y-2 font-medium mt-[16px]">
          <li v-for="link in navlink" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center p-2 rounded-lg text-[18px] text-[#616161] hover:text-[#FFFFFF] hover:bg-[#7EBA34]"
            >
            <i :class="link.icon"></i>
              <span class="ml-3">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>

        <button
          @click="logout"
          class="block px-3 py-2 rounded-xl focus:ring-4 text-white bg-[#7EBA34] absolute bottom-3 text-[20px] hover:text-red-600 hover:font-bold"
        >
        Выйти <i class="bx bx-log-out ml-5"></i>
        </button>
      </div>
    </aside>

    <aside id="default-sidebar" :class=" modal ? 'fixed top-0 left-0 z-40 w-80 h-screen transition-transform translate-x-0' : 'hidden'" aria-label="Sidebar">
      <div class="w-[100px] h-[100%] px-3 py-4 overflow-y-auto bg-[#F4F4F4] relative" style="position: relative; z-index: 1;"> 
        <!-- <button @click="toggleModal" class="z-10 w-[36px] text-[18px] h-[36px] absolute mx-[40px] my-[0px] text-[#7EBA34] px-2 py-1 bg-[#E5F1D6] rounded-lg"><i class='bx bx-chevron-left'></i></button> -->
        <img src="../../assets/images/kitchen_logo2.svg" alt="" class="w-[150px] h-[70px] mt-14 mb-3">
        <ul class="space-y-2 font-medium">
          <li v-for="link in navlink" :key="link.id">
            <router-link :to="link.link" class="flex items-center p-2 rounded-lg text-[24px] text-[#616161] hover:text-[#FFFFFF] hover:bg-[#7EBA34]">
              <i :class="link.icon" class="text-[28px] mx-auto"></i>
              <!-- <span class="ml-3">{{ link.title }}</span> -->
            </router-link>
          </li>
        </ul>

        <button
          @click="logout"
          class="block px-3 py-2 rounded-xl focus:ring-4 text-white bg-[#7EBA34] absolute bottom-3 text-[20px] hover:text-red-600 hover:font-bold"
        >
          <i class="bx bx-log-out"></i>
        </button>
      </div>
    </aside>
  </div>
</template>

<style lang="css" scoped>
.router-link-exact-active {
  background-color: #7EBA34;
  border: 1px solid #7EBA34;
  color: #FFFFFF;
}
.router-link-exact-active:hover {
  color: #FFFFFF;
}
</style>
