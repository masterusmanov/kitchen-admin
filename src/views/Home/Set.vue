<template>
    <div class="container mx-auto">
        <h3 class="text-[18px] font-[400]">Tayyor taomlar</h3> 
      <div class="mt-[24px] flex justify-between items-center">
        <h1 class="text-[40px] font-[600] font-self">Tayyor taomlar</h1>
        <div class="flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-4 p-4">          
            <button  @click="toggleModal" type="button" class="w-[32px] h-[32px] flex items-center justify-center text-white bg-[#7EBA34] hover:bg-[#7EBA68] rounded-lg px-2 py-2">
              +
            </button>
        </div>
      </div>
  
  
      <!-- Main modal -->
      <div tabindex="-1" aria-hidden="true" class="overflow-y-auto flex  bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" :class="modal ? '' : 'hidden'">
            
        <div class="relative p-4  max-w-6xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative w-[800px] p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <!-- Modal header -->
                <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-[24px] font-semibold text-gray-900 dark:text-white">
                        <span v-if="!isUpdate">Taom haqida malumotlar</span>
                        <span v-else>Taom malumotlarini yangilash</span>
                    </h3>
                    <button @click='toggleModal' type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form >
                    <div class="grid gap-4 mb-4 sm:grid-cols-1">
                        
                        <div class="flex justify-between gap-6">
                            <div class="w-[48%]">
                                <div class="mt-3">
                                    <label for="nameUz" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Taom nomi O‘zbek</label>
                                    <input v-model="contactInfo.nameUz" type="text" name="nameUz" id="nameUz" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Taom nomi" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="nameRu" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Название блюда Русский</label>
                                  <input v-model="contactInfo.nameRu" type="text" name="nameRu" id="nameRu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Название блюда" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="nameEn" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Dish name English</label>
                                  <input v-model="contactInfo.nameEn" type="text" name="nameEn" id="nameEn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dish name" required="">
                                </div>
                                <div class="mt-3">
                                    <label for="descriptionUz" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Izoh Uzbek</label>
                                    <input v-model="contactInfo.descriptionUz" type="text" name="descriptionUz" id="descriptionUz" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Izoh Uzbek" required="">
                                </div>
                                <div class="mt-3">
                                    <label for="descriptionRu" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Примечание Русский</label>
                                    <input v-model="contactInfo.descriptionRu" type="text" name="descriptionRu" id="descriptionRu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Примечание Русский" required="">
                                </div>
                                <div class="mt-3">
                                    <label for="descriptionEn" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Note english</label>
                                    <input v-model="contactInfo.descriptionEn" type="text" name="descriptionEn" id="descriptionEn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note english" required="">
                                </div>
                            </div>
                            <div class="w-[48%]">
                                <div class="mt-3">
                                    <label for="kkal" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Taom kalloriyasi</label>
                                    <input v-model="contactInfo.kkal" type="text" name="kkal" id="kkal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Taom kalloriyasi" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="price" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Taom narxi</label>
                                  <input v-model="contactInfo.price" type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Taom narxi" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="status" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Active</label>
                                  <input v-model="isChecked" type="checkbox" name="status" id="status" >
                                </div>
                                <div class="">
                                  <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="w-[100px] h-[100px]"/>
                                </div>          
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center">
                        <button v-if="!isUpdate" @click="addContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Saqlash
                        </button>
                        <button v-else @click="modifyContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Yangilash
                        </button>
                    </div>
                </form>
                <div class="grid justify-beetwen items-center my-14 gap-6">
                  <h3 class="text-[] font-[500]">Rasm yuklash PNG, JPG (345x180px)</h3>
                  <div class="w-[90%] flex gap-6 items-center  ">
                      <input type="file" @change="handleFileChange" />
                      <button class="bg-blue-600 text-white px-3 py-1 rounded-lg" @click="uploadImage">Rasm yuklang!</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
    <!-- -------------------------end of modal------------------------------------- -->
  
  
  
      <div class="flex flex-wrap justify-beetwen items-center mt-10 gap-5 2xl:gap-8">
        <div v-for="el in computedList" :key="el.id" class="lg:w-[23%] lg:h-[250px] 2xl:w-[23%] 2xl:h-[307px] grid justify-center items-center border bg-[#F4F4F4] py-[24px] rounded-[7px] shadow-md">
          <div class="absolute grid gap-4 mt-[20px] mb-[180px] 2xl:mb-[220px] lg:ml-[170px] 2xl:ml-[300px]">
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
            <!--  -->
          </div>
          <img :src="el.photoUrl" alt="" class="w-[120px] h-[120px] mx-auto">
          <div class="grid justify-center items-center text-center gap-1 py-[5px]">
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">{{ el.name }}</h2>
            <p class="flex items-center font-[700] text-[#5B5B5B]"><i class='bx bxs-hot text-yellow-400 text-[24px] mr-3'></i> {{el.kkal}} kkal</p>
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">{{el.price}} so'm</h2>
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
    import { setStore } from '../../stores/setStore';
    import {useRouter} from 'vue-router'
    import { set } from '../../service/set';
    import { storage } from '../../firebase'; 
    import {getDownloadURL, uploadBytes, ref as firebaseRef} from 'firebase/storage'
    
    const modal = vueRef(false);  
    const isShowModal = vueRef(false);
    
    function closeModal() {
    isShowModal.value = false
    localStorage.removeItem('delete_id')
  }
  
  function showModal(delete_id) {
      localStorage.setItem('delete_id', delete_id)
      isShowModal.value = true
  }
  
    const router = useRouter();
    const store = setStore();
    const isUpdate = vueRef(false);
    const isChecked = vueRef(false)
    let computedList = vueRef([]);
    const file = vueRef(null);
    const imageUrl = vueRef('');
    const uploadProgress = vueRef(0);
    
    const contactInfo = reactive({
      nameUz: '',
      nameRu: '',
      nameEn: '',
      descriptionUz: '',
      descriptionRu: '',
      descriptionEn: '',
      categoryId: '',
      status: '',
      photoUrl: '',
      price: '',
      kkal: ''
    })
    
    const toggleModal = () => {
        if(modal.value){
            isUpdate.value = false
            contactInfo.nameUz=''
            contactInfo.nameRu
            contactInfo.nameEn=''
            contactInfo.descriptionUz=''
            contactInfo.descriptionRu=''
            contactInfo.descriptionEn=''
            contactInfo.categoryId=''
            contactInfo.status=''
            contactInfo.photoUrl=''
            contactInfo.price=''
            contactInfo.kkal=''
            
        }
        modal.value = !modal.value
    }
    const updateList = () => {
      set.list().then((res)=>{
          store.state.list = res.data    
          console.log(store.state.list);
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
        const categoryId = localStorage.getItem('category');
        contactInfo.status = isChecked.value ? 'ACTIVE' : 'NOT_ACTIVE'; 
        const contact = {
          nameUz: contactInfo.nameUz,
          nameRu: contactInfo.nameRu,
          nameEn: contactInfo.nameEn,
          descriptionUz: contactInfo.descriptionUz,
          descriptionRu: contactInfo.descriptionRu,
          descriptionEn: contactInfo.descriptionEn,
          categoryId: categoryId,
          status: contactInfo.status,
          photoUrl: imageUrl.value,
          price: contactInfo.price,
          kkal: contactInfo.kkal,
        }
        
        try {
        const res = await set.create(contact);
            if(res.status == 201){
              contactInfo.nameUz=''
              contactInfo.nameRu=''
              contactInfo.nameEn=''
              contactInfo.descriptionUz=''
              contactInfo.descriptionRu=''
              contactInfo.descriptionEn=''
              contactInfo.categoryId=''
              contactInfo.status=''
              contactInfo.photoUrl=''
              contactInfo.price=''
              contactInfo.kkal=''
              toggleModal();
              updateList();
            }
          }catch (error) {
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
          descriptionUz: contactInfo.descriptionUz,
          descriptionRu: contactInfo.descriptionRu,
          descriptionEn: contactInfo.descriptionEn,
          categoryId: contactInfo.categoryId,
          status: contactInfo.status,
          photoUrl: contactInfo.photoUrl,
          price: contactInfo.price,
          kkal: contactInfo.kkal,
        }
          console.log('Modified Contact:', contact);
        
        set.update(id, contact).then((res)=>{
            if(res.status == 200){
                contactInfo.nameUz=''
                contactInfo.nameRu=''
                contactInfo.nameEn=''
                contactInfo.descriptionUz=''
                contactInfo.descriptionRu=''
                contactInfo.descriptionEn=''
                contactInfo.categoryId=''
                contactInfo.status=''
                contactInfo.photoUrl=''
                contactInfo.price=''
                contactInfo.kkal=''
                
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
        set.remove(id).then((res)=>{
            if(res.status == 200){
                updateList();
        
                closeModal()
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    const updateContact = (id)=>{
        localStorage.setItem('id', id)
        isUpdate.value = true;
        const foundContact = store.findOne(id)
        contactInfo.nameUz = foundContact[0].nameUz
        contactInfo.nameRu = foundContact[0].nameRu
        contactInfo.nameEn = foundContact[0].nameEn
        contactInfo.descriptionUz = foundContact[0].descriptionUz
        contactInfo.descriptionRu = foundContact[0].descriptionRu
        contactInfo.descriptionEn = foundContact[0].descriptionEn
        contactInfo.categoryId = foundContact[0].categoryId
        contactInfo.status = foundContact[0].status
        contactInfo.photoUrl = foundContact[0].photoUrl
        contactInfo.price = foundContact[0].price
        contactInfo.kkal = foundContact[0].kkal
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
          const storageRef = firebaseRef(storage, 'foods/' + file.value.name);
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
        return store.state.list;
    })
    

    onMounted(()=>{
        updateList()
        initDropdowns()
    })
  </script>
  
  <style lang="scss" scoped>
  </style>
  