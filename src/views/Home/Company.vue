<template>
    <div class="container mx-auto">
        <h3 class="text-[18px] font-[400]">Kompaniya nomlari</h3> 
      <div class="mt-[24px] flex justify-between items-center">
        <h1 class="text-[40px] font-[600] font-self">Kompaniya nomlari</h1>
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
                        <div class="grid justify-between gap-6">
                            <div class="mt-3">
                                <label for="name" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Kompaniya nomi</label>
                                <input v-model="contactInfo.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Taom nomi" required="">
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
                </div>
                </form>
            </div>
        </div>
    </div>
    <!-- -------------------------end of modal------------------------------------- -->
        
        
        
        <section class=" p-0 sm:p-5 md:p-0 md:py-4 mt-10">

        <!-- ------------------------table-------------------------------------------- -->
        <div class="w-full px-0 lg:p-0">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead class="text-md text-white font-bold uppercase bg-gray-500 ">
                            <tr class="">
                                <th scope="col" class="px-4 py-3 text-left">Kompaniya nomlari</th>
                                <th scope="col" class="px-4 py-3 text-left">Holat</th>
                                <th scope="col" class="px-10 py-3 text-">O'chirish / Yangilash</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="el in computedList" :key="el.id" class="border-b dark:border-gray-700">
                                <td class="px-4 py-3">{{el.name}}</td>
                                <td class="px-4 py-3">{{el.status}}</td>
                                <td class="px-4 py-3 text-[20px]">
                                    <div  class="bg-white  flex justify-center items-center">
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
                                </td>
                            </tr>
                            </tbody>
                    </table>
                </div>
                
            </div>
        </div>
        <!-- -------------------------end of table------------------------------------- -->
        
        <Modal v-if="isShowModal" @close="closeModal" >
            <template #body>
                <p class="text-center text-[24px] leading-relaxed">
                    Rostdan ham o'chirmoqchimisiz?
                </p>
            </template>
            <template #footer>
                <div class="flex justify-center gap-6">
                    <button @click="closeModal" type="button" class="text-[#7EBA34] border border-[#7EBA34] hover:bg-[#7EBA34] rounded-lg text-[24px] font-medium px-10 py-2.5 hover:text-white focus:z-10">
                       Orqaga
                    </button>
                    <button @click="removeContact" type="button" class="text-[#7EBA34] border border-[#7EBA34] hover:bg-[#7EBA34] rounded-lg text-[24px] font-medium px-10 py-2.5 hover:text-white focus:z-10">
                        O'chirilsin
                    </button>
                </div>
            </template>                       
        </Modal>
        </section>
    </div>
  
  </template>
  
  <script setup>
  import {ref as vueRef, reactive, computed, onMounted} from 'vue'
  import { companyStore } from '../../stores/company';
  import {useRouter} from 'vue-router'
  import { company } from '../../service/company';
  import { Modal } from 'flowbite-vue'  
  import { storage } from '../../firebase'; 
  import {getDownloadURL, uploadBytes, ref as firebaseRef} from 'firebase/storage'
  
  const isShowModal = vueRef(false)
  function closeModal() {
    isShowModal.value = false
    localStorage.removeItem('delete_id')
  }
  
  function showModal(delete_id) {
      localStorage.setItem('delete_id', delete_id)
      isShowModal.value = true
  }
  
  const router = useRouter();
  const store = companyStore();
  const modal = vueRef(false);
  const isUpdate = vueRef(false);
  let computedList = vueRef([]);
  const file = vueRef(null);
    const imageUrl = vueRef('');
    const uploadProgress = vueRef(0);
  
  const contactInfo = reactive({
      name: '',
  })
  
  const toggleModal = () => {
      if(modal.value){
          isUpdate.value = false
          contactInfo.name=''          
      }
      modal.value = !modal.value
  }
  
  const updateList = () => {
      company.list().then((res)=>{
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
  
  const addContact=(evet)=>{
      evet.preventDefault();
      const contact = {
          name: contactInfo.name,
      }
  
      company.create(contact).then((res)=>{
          if(res.status == 201){
              contactInfo.name=''
    
    
              imageUrl.value=''
              toggleModal()
              updateList();
          }
      }).catch((error)=>{
          if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
              router.push({name: 'login'})
          }
          console.log(error.message);
      })
  
  }
  
  const modifyContact=(event)=>{
      event.preventDefault();
      const id  = localStorage.getItem('id')
      const contact = {
          name: contactInfo.name,



      }
  
      company.update(id, contact).then((res)=>{
          if(res.status == 200){
              toast.success('successfully updated contact !', {autoClose: 1000, theme: 'dark', pauseOnHover: false})
              contactInfo.name=''
    
    
    
              
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
      company.remove(id).then((res)=>{
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
      contactInfo.name = foundContact[0].name
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
        const storageRef = firebaseRef(storage, 'company/' + file.value.name);
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
  })
  </script>
  
  <style lang="scss" scoped></style>
  