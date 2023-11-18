<template>
    <div class="container mx-auto">
        <h3 class="text-[18px] font-[400]">Bildirishnomalar</h3> 
      <div class="mt-[24px] flex justify-between items-center">
        <h1 class="text-[40px] font-[600] font-self">Bildirishnomalar</h1>
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
                        <span v-if="!isUpdate">Bildirishnomalar haqida</span>
                        <span v-else>Bildirishnomalarni yangilash</span>
                    </h3>
                    <button @click='toggleModal' type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form >
                    <div class="grid gap-4 mb-4 sm:grid-cols-1">
                        <div class="flex justify-between gap-4">
                            <div class="w-[48%]">
                                <div class="w-[100%] mt-3">
                                    <label for="titleUz" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Bildirishnoma sarlavhasi</label>
                                    <input v-model="contactInfo.titleUz" type="text" name="titleUz" id="titleUz" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sarlavha kiriting" required="">
                                </div>
                                <div class="w-[100%] mt-3">
                                    <label for="titleRu" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Заголовок уведомления</label>
                                    <input v-model="contactInfo.titleRu" type="text" name="titleRu" id="titleRu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Заголовок уведомления" required="">
                                </div>
                                <div class="w-[100%] mt-3">
                                    <label for="titleEn" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Notification header</label>
                                    <input v-model="contactInfo.titleEn" type="text" name="titleEn" id="titleEn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notification header" required="">
                                </div>
                            </div>
                           <div class="w-[48%]">
                            <div class="w-[100%] mt-3">
                                <label for="bodyUz" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Bildirishnoma haqida qisqacha</label>
                                <input v-model="contactInfo.bodyUz" type="text" name="bodyUz" id="bodyUz" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bildirishnoma haqida qisqacha" required="">
                              </div>                                
                              <div class="w-[100%] mt-3">
                                  <label for="bodyRu" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Кратко об уведомлении</label>
                                  <input v-model="contactInfo.bodyRu" type="text" name="bodyRu" id="bodyRu" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Кратко об уведомлении" required="">
                              </div>
                              <div class="w-[100%] mt-3">
                                  <label for="bodyEn" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Brief about the notice</label>
                                  <input v-model="contactInfo.bodyEn" type="text" name="bodyEn" id="bodyEn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brief about the notice" required="">
                                </div>    
                           </div>
                        </div>
                        <div class="">
                            <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="w-[100px]"/>
                        </div>
                    <div class="flex justify-end items-center mt-5">
                        <button v-if="!isUpdate" @click="addContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Saqlash
                        </button>
                        <button v-else @click="modifyContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Yangilash
                        </button>
                    </div>
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
        
        
        
        <section class="flex flex-wrap justify-beetwen gap-10 p-0 sm:p-5 md:p-0 md:py-4 mt-10">

        <!-- ------------------------table-------------------------------------------- -->
        <div class="w-[98.5%] 2xl:w-[99%] px-0 lg:p-0">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead class="text-md text-white font-bold uppercase bg-gray-500 ">
                            <tr class="">
                                <th scope="col" class="px-4 py-3 text-left">Sur'ati</th>
                                <th scope="col" class="px-4 py-3 text-left">Bildirishnoma sarlavhasi</th>
                                <th scope="col" class="px-4 py-3 text-left">Qisqacha ma'lumot</th>
                                <th scope="col" class="px-4 py-3 text-left">Holati</th>
                                <th scope="col" class="px-10 py-3 text-">O'chirish / Yangilash</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="el in computedList" :key="el.id" class="border-b dark:border-gray-700">
                                <td class="px-4 py-3 flex items-center gap-4">
                                    <img :src="el.photoUrl" alt="photo" class="rounded-full w-[40px]">
                                </td>
                                <td class="px-4 py-3">{{el.title}}</td>
                                <td class="px-4 py-3">{{el.body}}</td>
                                <td class="px-4 py-3">{{el.status}}</td>
                                <td class="px-4 py-3 text-[20px]">
                                    <div  class="bg-white  flex justify-center items-center gap-6">
                                        <div>
                                            <button @click="openModal(el.id)" class="open-modal-button">Yuborish</button>
                                            <div v-if="isModalOpen" class="modal-overlay">
                                              <div class="modal">
                                                <div>
                                                    <p class="text-center font-[700] text-[24px] py-10">Bildirishnomani yuborasizmi?</p>
                                                </div>
                                                <div class="flex justify-center gap-6">
                                                    <button @click="closeOpenModal" type="button" class="text-[#7EBA34] border border-[#7EBA34] hover:bg-[#7EBA34] rounded-lg text-[24px] font-medium px-10 py-2.5 hover:text-white focus:z-10">
                                                       Orqaga
                                                    </button>
                                                    <button @click="sendNote" type="button" class="text-[#7EBA34] border border-[#7EBA34] hover:bg-[#7EBA34] rounded-lg text-[24px] font-medium px-10 py-2.5 hover:text-white focus:z-10">
                                                        Yuborish
                                                    </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        
                                        <button @click="showModal(el.id)" >
                                            <div class="w-6 h-6 py-1 rounded-md bg-red-500 mr-4 cursor-pointer">
                                                <i class="bx bx-trash text-white text-[16px] flex items-center justify-center"></i>
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
        
        <!-- <a v-for="el in computedList" :key="el.id" href="#" class="flex flex-col items-center bg-[#F4F4F4] border border-gray-200 rounded-lg shadow md:flex-row lg:w-[45%] 2xl:w-[45%]  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="w-[150px] rounded-t-lg h-[140px]  md:rounded-none md:rounded-s-lg px-2" :src="el.photoUrl" alt="">
            <div class="grid justify-between p-4 leading-normal">
                <h5 class="w-[250px] 2xl:w-[500px] mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{el.titleUz}}</h5>
                <p class="w-[220px] 2xl:w-[500px] mb-3  text-sm font-normal text-gray-700 dark:text-gray-400">{{el.body}}</p>
                <button @click="showModal(el.id)" class="mx-auto ml-[200px] 2xl:ml-[450px]">
                    <div class="w-6 h-6 py-1 rounded-md bg-red-500 mr-4 cursor-pointer">
                        <i class="bx bx-trash text-white text-[16px] flex items-center justify-center"></i>
                    </div>
                </button>
            </div>
        </a> -->

        <!-- -------------------------end of table------------------------------------- -->

        <!-- <div  class="bg-white  flex justify-end items-center">
            <button @click="created(el.id)">
                <div class="w-6 h-6 py-1 rounded-md bg-blue-500 mr-4 cursor-pointer">
                    <i class="bx bx-task text-white text-[16px] flex items-center justify-center"></i>
                </div>
            </button>
        </div> -->
        
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
  import { notificationStore } from '../../stores/notification';
  import {useRouter} from 'vue-router'
  import { notification } from '../../service/notification';
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
  
  const isModalOpen = vueRef(false);

    // Methods
    function openModal (id) {
        localStorage.setItem('id', id)
        isModalOpen.value = true;
    };

    function closeOpenModal() {
        isModalOpen.value = false;
        localStorage.removeItem('id')
    };

  const router = useRouter();
  const store = notificationStore();
  const modal = vueRef(false);
  const isUpdate = vueRef(false);
  let computedList = vueRef([]);
  const file = vueRef(null);
    const imageUrl = vueRef('');
    const uploadProgress = vueRef(0);
  
  const contactInfo = reactive({
      titleUz: '',
      titleRu: '',
      titleEn: '',
      bodyUz: '',
      bodyRu: '',
      bodyEn: '',
      photoUrl: ''
  })
  
  const toggleModal = () => {
      if(modal.value){
          isUpdate.value = false
          contactInfo.titleUz=''
          contactInfo.titleRu=''
          contactInfo.titleEn=''
          contactInfo.bodyUz=''
          contactInfo.bodyRu=''
          contactInfo.bodyEn=''
          contactInfo.photoUrl=''
          
      }
      modal.value = !modal.value
  }
  
  const updateList = () => {
      notification.list().then((res)=>{
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
          titleUz: contactInfo.titleUz,
          titleRu: contactInfo.titleRu,
          titleEn: contactInfo.titleEn,
          bodyUz: contactInfo.bodyUz,
          bodyRu: contactInfo.bodyRu,
          bodyEn: contactInfo.bodyEn,
          photoUrl: imageUrl.value
      }
  
      notification.create(contact).then((res)=>{
          if(res.status == 201){
              contactInfo.titleUz=''
              contactInfo.titleRu=''
              contactInfo.titleEn=''
              contactInfo.bodyUz=''
              contactInfo.bodyRu=''
              contactInfo.bodyEn=''
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
      window.location.reload()
  
  }
  
//   const modifyContact=(event)=>{
//       event.preventDefault();
//       const id  = localStorage.getItem('id')
//       const contact = {
//           titleUz: contactInfo.titleUz,
//           titleRu: contactInfo.titleRu,
//           titleEn: contactInfo.titleEn,
//           bodyUz: contactInfo.bodyUz,
//           bodyRu: contactInfo.bodyRu,
//           bodyEn: contactInfo.bodyEn,
//           photoUrl: contactInfo.photoUrl
//       }
  
//       employee.update(id, contact).then((res)=>{
//           if(res.status == 200){
//               toast.success('successfully updated contact !', {autoClose: 1000, theme: 'dark', pauseOnHover: false})
//               contactInfo.name=''
//               contactInfo.surname=''
//               contactInfo.phone=''
//               contactInfo.password
//               contactInfo.photoUrl
//               contactInfo.role
              
//               isUpdate.value = false;
//               updateList();
//               toggleModal()
//           }
//       }).catch((error)=>{
//           if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
//               router.push({name: 'login'})
//           }
//           toast.error(error.message)
//       })
//   }
  
  const removeContact=()=>{
      const id = localStorage.getItem('delete_id')
      notification.remove(id).then((res)=>{
          if(res.status == 200){
              updateList();
              closeModal()
          }
      }).catch((error)=>{
          console.log(error);
      })
  }
  
  const sendNote = () => {
    const id = localStorage.getItem('id');

    notification.send(id)
        .then((res) => {
        if (res.status == 200) {
            alert('Yuborildi');
            closeOpenModal();
        }
        })
        .catch((error) => {
            closeOpenModal();
        alert('Yuborishda xatolik');
        console.log(error);
        });
};

  // =============================================================
  const handleFileChange = (e) => {
        file.value = e.target.files[0];
    };

    const uploadImage = async () => {
    if (file.value) {
        try {
        console.log(file.value);
        const storageRef = firebaseRef(storage, 'notification/' + file.value.name);
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
  
  <style lang="scss" scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  /* Button styles */
  .open-modal-button {
    background-color: #7EBA34;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .close-modal-button {
    background-color: #e3342f;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
    </style>
  