<template>
  <div class="container mx-auto">
    <h3 class="text-[18px] font-[400]">Menu</h3> 
    <div class="mt-[24px] flex justify-between items-center">
      <h1 class="text-[40px] font-[600] font-self">Menu</h1>
      <div class="flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-4 p-4">          
          <button  @click="toggleModal" type="button" class="w-[32px] h-[32px] flex items-center justify-center text-white bg-[#7EBA34] hover:bg-[#7EBA68] rounded-lg px-2 py-2">+</button>
      </div>
    </div>

    <!-- Main modal -->
    <div tabindex="-1" aria-hidden="true" class="overflow-y-auto flex bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" :class="modal ? '' : 'hidden'">
          
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <!-- Modal header -->
              <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 class="text-[24px] font-semibold text-gray-900 dark:text-white">
                      <span v-if="!isUpdate">Kategoriya malumotlari</span>
                      <span v-else>Kategoriya malumotlarini yangilash</span>
                  </h3>
                  <button @click='toggleModal' type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
              <!-- Modal body -->
              <form >
                  <div class="grid gap-4 mb-4 sm:grid-cols-1">
                      <div>
                          <label for="keyWord" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Key word</label>
                          <input v-model="contactInfo.keyWord" type="text" name="keyWord" id="keyWord" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Key word" required="">
                      </div>
                      <div>
                          <label for="nameUz" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Kategoriya nomi O‘zbek</label>
                          <input v-model="contactInfo.nameUz" type="text" name="nameUz" id="nameUz" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kategoriya nomi" required="">
                      </div>
                      <div>
                        <label for="nameRu" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Название категории Русский</label>
                        <input v-model="contactInfo.nameRu" type="text" name="nameRu" id="nameRu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Название категории" required="">
                      </div>
                      <div>
                        <label for="nameEn" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Category name English</label>
                        <input v-model="contactInfo.nameEn" type="text" name="nameEn" id="nameEn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category name" required="">
                      </div>
                      <div class="flex items-center gap-14">
                        <div class=" w-[25%] mt-3">
                          <label for="startSelector" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tayyor bo'lish vaqti</label>
                            <select id="startSelector" class="w-[75%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg" @change="handleStartTimeChange($event.target.value)">
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                              </select>
                        </div>
                        <div class="w-[25%] mt-3">
                          <label for="endSelector" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tugash vaqti</label>
                            <select id="endSelector" class="w-[75%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg" @change="handleStartTimeChange1($event.target.value)">
                              <option value="09:00">09:00</option>
                              <option value="10:00">10:00</option>
                              <option value="11:00">11:00</option>
                              <option value="12:00">12:00</option>
                              <option value="13:00">13:00</option>
                              <option value="14:00">14:00</option>
                              <option value="15:00">15:00</option>
                              <option value="16:00">16:00</option>
                              <option value="17:00">17:00</option>
                              <option value="18:00">18:00</option>
                              <option value="19:00">19:00</option>
                              </select>
                        </div>
                        <div>
                          <label for="status" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Active</label>
                          <input v-model="isChecked" type="checkbox" name="status" id="status" >
                        </div>
                      </div>
                    <div class="">
                        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="w-[150px] h-[150px]"/>
                    </div>
                  </div>
                  <div class="flex justify-end items-center">
                      <button v-if="!isUpdate" @click="addContact($event)" type="submit" class="text-white inline-flex items-center bg-[#7EBA34] hover:bg-[#7EBA74] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#7EBA34] dark:focus:ring-blue-800">
                          Saqlash
                      </button>
                      <button v-else @click="modifyContact($event)" type="submit" class="text-white inline-flex items-center bg-[#7EBA34] hover:bg-[#7EBA74] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#7EBA34] dark:focus:ring-blue-800">
                          Yangilash
                      </button>
                  </div>
              </form>
              <div class="grid justify-beetwen items-center my-14 gap-6">
                <h3 class="text-[] font-[500]">Rasm yuklash PNG, JPG (345x180px)</h3>
                <div class="w-[60%] flex gap-6 items-center  ">
                    <input type="file" @change="handleFileChange" />
                    <button class="bg-blue-600 text-white px-3 py-1 rounded-lg" @click="uploadImage">Rasm yuklang!</button>
                </div>
            </div>
          </div>
      </div>
  </div>
  <!-- -------------------------end of modal------------------------------------- -->



    <div class="flex flex-wrap justify-start items-center mt-10 gap-6">
      <div v-for="el in computedList" :key="el.id" class="lg:w-[31%] lg:h-[250px] 2xl:w-[32%] 2xl:h-[307px] grid justify-center items-center border bg-[#F4F4F4] py-[24px] rounded-[7px] shadow-md">
        <div class="absolute grid gap-4 mt-[20px] mb-[180px] 2xl:mb-[220px] lg:ml-[230px] 2xl:ml-[400px]">
          <button @click="showModal(el.id)" >
            <div class="w-6 h-6 py-1 rounded-md bg-red-500 mr-4 cursor-pointer">
                <i class="bx bx-trash text-white text-[16px] flex items-center justify-center"></i>
            </div>
        </button>
        <button @click="updateContact(el.id)">
            <div class="w-6 h-6 py-1 rounded-md bg-blue-500 mr-4 cursor-pointer">
                <i class="bx bx-task text-white text-[16px] flex items-center justify-center"></i>
            </div>
        </button>
        </div>
        <img :src="el.photoUrl" alt="" class="w-[150px] h-[150px] mx-auto">
        <div class="flex justify-center items-center my-[12px]">
          <a href="/set" @click="getid(el.id)" class="text-[24px] font-[500] font-self">{{el.name}}</a>
        </div>
      </div>
    </div>
</div>

<Modal v-if="isShowModal" @close="showModal" >
  <template #body>
      <p class="text-center text-[24px] font-[500]">
         Ovqatni rostdan ham o'chirmoqchimisiz?
      </p>
  </template>
  <template #footer>
      <div class="flex justify-center gap-6">
        <button @click="closeModal" type="button" class="text-[#7EBA34] border border-[#7EBA34] hover:bg-[#7EBA34] rounded-lg text-[24px] font-medium px-10 py-2.5 hover:text-white focus:z-10 ">
          Orqaga
        </button>
        <button @click="removeContact" type="button" class="text-[#7EBA34] border border-[#7EBA34] hover:bg-[#7EBA34] rounded-lg text-[24px] font-medium px-10 py-2.5 hover:text-white focus:z-10 ">
            O'chirish
        </button>
      </div>
  </template>                       
</Modal>
</template>

<script setup>
  import {ref as vueRef, reactive, computed, onMounted} from 'vue'
  import { Modal } from 'flowbite-vue';
  import { initDropdowns } from 'flowbite'
  import { homeStore } from '../../stores/home';
  import {useRouter} from 'vue-router'
  import { home } from '../../service/home';
  import { storage } from '../../firebase'; 
  import {getDownloadURL, uploadBytes, ref as firebaseRef} from 'firebase/storage'
  
  const modal = vueRef(false);  
  const isShowModal = vueRef(false);
  
  const openModal = vueRef(false);

  
  function closeModal() {
    localStorage.removeItem('delete_id')
    isShowModal.value = false
  }
  
  function showModal(delete_id) {
      localStorage.setItem('delete_id', delete_id)
      isShowModal.value = true
  }

  const handleStartTimeChange = (selectedValue) => {
    contactInfo.startTime = selectedValue;
    console.log(contactInfo.startTime);
  };

  const handleStartTimeChange1 = (selectedValue) => {
    contactInfo.endTime = selectedValue;
    console.log(contactInfo.endTime);
  };
  const getid = (id) => {
    localStorage.setItem('category', id)
  }

  const router = useRouter();
  const store = homeStore();
  const isUpdate = vueRef(false);
  let computedList = vueRef([]);
  const isChecked = vueRef(false);
  const file = vueRef(null);
    const imageUrl = vueRef('');
    const uploadProgress = vueRef(0);
  
  const contactInfo = reactive({
    nameUz: '',
    nameRu: '',
    nameEn: '',
    keyWord: '',
    photoUrl: '',
    status: '',
    startTime: '',
    endTime: '',
      
  })
  
  const toggleModal = () => {
      if(modal.value){
          isUpdate.value = false
          contactInfo.nameUz=''
          contactInfo.nameRu=''
          contactInfo.nameEn=''
          contactInfo.keyWord=''
          contactInfo.photoUrl=''
          contactInfo.status=''
          contactInfo.startTime=''
          contactInfo.endTime=''
          
      }
      modal.value = !modal.value
  }
  
  const updateList = () => {
      home.list().then((res)=>{
          store.state.list = res.data    
      }).catch((error)=>{
          if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
              router.push({name: 'login'})
          }
          else{
              console.log(error);
  
          }
          console.log(error.message);
      })
  }
  
  const addContact = async (evet)=>{
      evet.preventDefault();
      contactInfo.status = isChecked.value ? 'ACTIVE' : 'NOT_ACTIVE';
      const contact = {
        nameUz: contactInfo.nameUz,
        nameRu: contactInfo.nameRu,
        nameEn: contactInfo.nameEn,
        keyWord: contactInfo.keyWord,
        photoUrl: imageUrl.value,
        status: contactInfo.status,
        startTime: contactInfo.startTime,
        endTime: contactInfo.endTime,
      }
      
      try{
        const res = await home.create(contact);
        if(res.status == 201){
            contactInfo.nameUz=''
            contactInfo.nameRu=''
            contactInfo.nameEn=''
            contactInfo.keyWord=''
            contactInfo.photoUrl=''
            contactInfo.status=''
            contactInfo.startTime=''
            contactInfo.endTime=''
            toggleModal()
            updateList();
          }
      } catch (error) {
        if (
                error.message === 'Request failed with status code 401' ||
                error.message === 'token expired' ||
                error.message === 'token not found'
            ) {
                router.push({ name: 'login' });
            }
            console.log(error.message);
        } finally {
            window.location.reload()
        }
    }
  
  const modifyContact=(event)=>{
      event.preventDefault();
      contactInfo.status = isChecked.value ? 'ACTIVE' : 'NOT_ACTIVE';
      const id  = localStorage.getItem('id')
      const contact = {
        nameUz: contactInfo.nameUz,
        nameRu: contactInfo.nameRu,
        nameEn: contactInfo.nameEn,
        keyWord: contactInfo.keyWord,
        photoUrl: contactInfo.photoUrl,
        status: contactInfo.status,
        startTime: contactInfo.startTime,
        endTime: contactInfo.endTime,
      }
      console.log('Modified Contact:', contact);
  
      home.update(id, contact).then((res)=>{
          if(res.status == 200){
            contactInfo.name=''
            contactInfo.nameRu=''
            contactInfo.nameEn=''
            contactInfo.keyWord=''
            contactInfo.photoUrl=''
            contactInfo.status=''
            contactInfo.startTime=''
            contactInfo.endTime=''
              
              isUpdate.value = false;
              updateList();
              toggleModal()
          }
      }).catch((error)=>{
          if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
              router.push({name: 'login'})
          }
          toast.error(error.message)
      })
  }
  
  const removeContact=()=>{
      const id = localStorage.getItem('delete_id')
      home.remove(id).then((res)=>{
        console.log(res.status);
          if(res.status == 200){
              updateList();
              closeModal()
          }
      }).catch((error)=>{
          console.log(error);
      })
      window.location.reload()
  }
  
  const updateContact = (id)=>{
      localStorage.setItem('id', id)
      isUpdate.value = true;
      const foundContact = store.findOne(id)
      contactInfo.nameUz = foundContact[0].nameUz
      contactInfo.nameRu = foundContact[0].nameRu
      contactInfo.nameEn = foundContact[0].nameEn
      contactInfo.keyWord = foundContact[0].keyWord
      contactInfo.photoUrl = foundContact[0].photoUrl
      contactInfo.status = foundContact[0].status
      contactInfo.startTime = foundContact[0].startTime
      contactInfo.endTime = foundContact[0].endTime
      toggleModal();
  }

  // =============================================================
  const handleFileChange = (e) => {
        file.value = e.target.files[0];
    };

    const uploadImage = async () => {
    if (file.value) {
        try {
        console.log(file.value);
        const storageRef = firebaseRef(storage, 'drinks/' + file.value.name);
        const uploadTask = uploadBytes(storageRef, file.value);

        uploadTask
            .then((snapshot) => {
            return getDownloadURL(storageRef);
            })
            .then((downloadURL) => {
            imageUrl.value = downloadURL;
            console.log(imageUrl.value);
            })
            .catch((error) => {
            console.error('Error uploading the image:', error);
            });
        } catch (error) {
        console.error('Error uploading the image:', error);
        }
    } else {
        console.warn('Please select a file first.');
    }
    };
// =========================================================
  
  computedList = computed(()=> {
    console.log(store.state.list);  
    return store.state.list;
  })
  
  onMounted(()=>{
      updateList()
      initDropdowns()
  });

  // watch(() => contactInfo.startTime, (newStartTime) => {
  //   handleStartTimeChange(newStartTime);
  // });
</script>

<style lang="scss" scoped>
</style>
