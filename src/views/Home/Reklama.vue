<template>
    <div class="container mx-auto">
        <h3 class="text-[18px] font-[400]">Reklama</h3> 
      <div class="mt-[24px] flex justify-between items-center">
        <h1 class="text-[40px] font-[600] font-self">Reklama</h1>
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
                        <span v-if="!isUpdate">Reklama uchun rasm yuklash</span>
                        <span v-else>Taom malumotlarini yangilash</span>
                    </h3>
                    <button @click='toggleModal' type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="grid justify-beetwen items-center my-14 gap-6">
                  <h3 class="text-[] font-[500]">Rasm yuklash PNG, JPG (345x180px)</h3>
                  <div class="w-[90%] flex gap-6 items-center  ">
                      <input type="file" @change="handleFileChange" />
                      <button class="bg-blue-600 text-white px-3 py-1 rounded-lg" @click="uploadImage">Rasm yuklang!</button>
                  </div>
              </div>
                <form >
                    <div class="grid gap-4 mb-4 sm:grid-cols-1">
                        
                      <div class="">
                          <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image"  class="w-[150px] h-[150px]"/>
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
            </div>
        </div>
    </div>
    <!-- -------------------------end of modal------------------------------------- -->
  
  
  
      <div class="flex flex-wrap justify-beetwen items-center mt-10 gap-6 2xl:gap-14">
        <div v-for="el of computedList" :key="el.id" class="lg:w-[48%] lg:h-[266px] 2xl:w-[48%] 2xl:h-[357px] grid justify-center items-center rounded-[7px]">
          <div class="absolute mt-[200px] 2xl:mt-[250px] lg:ml-[20px] 2xl:ml-[50px]">
            <i @click="showModal(el.id)" class='bx bxs-trash text-red-500 text-[28px]'></i>
          </div>
          <img :src="JSON.parse(el.photoUrl).photoUrl" alt="" class="w-full h-full">
        </div>
      </div>
  </div>
  
  <Modal v-if="isShowModal" @close="closeModal" >
    <template #body>
        <p class="text-center text-[24px] font-[500]">
           Reklamani rostdan ham o'chirmoqchimisiz?
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
    import { reklamaStore } from '../../stores/reklamaStore';
    import {useRouter} from 'vue-router'
    import { reklama } from '../../service/reklama';
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
    const store = reklamaStore();
    const isUpdate = vueRef(false);
    let computedList = vueRef([]);
    const file = vueRef(null);
      const imageUrl = vueRef('');
      const uploadProgress = vueRef(0);
    
    const contactInfo = reactive({
        photoUrl: ''
    })
    
    const toggleModal = () => {
        if(modal.value){
            isUpdate.value = false
            contactInfo.photoUrl=''            
        }
        modal.value = !modal.value
    }
    
    const updateList = () => {
        reklama.list().then((res)=>{
            console.log(res.data);
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
            photoUrl: imageUrl.value
        }
    
        reklama.create(contact).then((res)=>{
            if(res.status == 201){
                imageUrl.value = '';
                toggleModal()
                updateList();
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'login'})
            }
            console.log(error.message);
        })
      window.location.reload()   
    }
    
    // const modifyContact=(event)=>{
    //     event.preventDefault();
    //     const id  = localStorage.getItem('id')
    //     const contact = {
    //         photoUrl: contactInfo.photoUrl
    //     }
    
    //     reklama.update(id, contact).then((res)=>{
    //         if(res.status == 200){
    //             contactInfo.photoUrl=''
                
    //             isUpdate.value = false;
    //             updateList();
    //             toggleModal()
    //         }
    //     }).catch((error)=>{
    //         if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
    //             router.push({name: 'login'})
    //         }
    //         toast.error(error.message)
    //     })
    // }
    
    const removeContact=()=>{
        const id = localStorage.getItem('delete_id')
        reklama.remove(id).then((res)=>{
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
        contactInfo.photoUrl = foundContact[0].photoUrl
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
          const storageRef = firebaseRef(storage, 'reklama/' + file.value.name);
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
  