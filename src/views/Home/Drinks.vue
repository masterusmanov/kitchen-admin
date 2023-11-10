<template>
    <div class="container mx-auto">
        <h3 class="text-[18px] font-[400]">Ichimliklar</h3> 
      <div class="mt-[24px] flex justify-between items-center">
        <h1 class="text-[40px] font-[600] font-self">Ichimliklar</h1>
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
                                    <label for="dish_uzb" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Taom nomi O‘zbek</label>
                                    <input v-model="contactInfo.dish_uzb" type="text" name="dish_uzb" id="dish_uzb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Taom nomi" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="dish_rus" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Название блюда Русский</label>
                                  <input v-model="contactInfo.dish_rus" type="text" name="dish_rus" id="dish_rus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Название блюда" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="dish_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Dish name English</label>
                                  <input v-model="contactInfo.dish_eng" type="text" name="dish_eng" id="dish_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dish name" required="">
                                </div>
                                <div class="mt-3">
                                    <label for="note_uzb" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Izoh Uzbek</label>
                                    <input v-model="contactInfo.note_uzb" type="text" name="note_uzb" id="note_uzb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Izoh Uzbek" required="">
                                </div>
                                <div class="mt-3">
                                    <label for="note_rus" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Примечание Русский</label>
                                    <input v-model="contactInfo.note_rus" type="text" name="note_rus" id="note_rus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Примечание Русский" required="">
                                </div>
                                <div class="mt-3">
                                    <label for="note_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Note english</label>
                                    <input v-model="contactInfo.note_eng" type="text" name="note_eng" id="note_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Note english" required="">
                                </div>
                            </div>
                            <div class="w-[48%]">
                                <div class="mt-3">
                                    <label for="calories" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Taom kalloriyasi</label>
                                    <input v-model="contactInfo.calories" type="text" name="calories" id="calories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Taom kalloriyasi" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="dish_price" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Taom narxi</label>
                                  <input v-model="contactInfo.dish_price" type="text" name="dish_price" id="dish_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Taom narxi" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="timeSelector" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Vaqtni tanlash</label>
                                    <select id="timeSelector" class="w-[23%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg">
                                        <option value="time1">09:00</option>
                                        <option value="time2">10:00</option>
                                        <option value="time3">11:00</option>
                                        <option value="time4">12:00</option>
                                        <option value="time5">13:00</option>
                                        <option value="time6">14:00</option>
                                        <option value="time7">15:00</option>
                                        <option value="time8">14:00</option>
                                        <option value="time9">15:00</option>
                                        <option value="time10">16:00</option>
                                        <option value="time11">17:00</option>
                                        <option value="time12">18:00</option>
                                        <option value="time13">19:00</option>
                                      </select>
                                </div>
                                <div class="grid justify-beetwen items-center my-14 gap-6">
                                    <h3 class="text-[] font-[500]">Rasm yuklash PNG, JPG (345x180px)</h3>
                                    <div class="w-[90%] flex gap-6 items-center  ">
                                        <input type="file" @change="handleFileChange" />
                                        <button class="bg-blue-600 text-white px-3 py-1 rounded-lg" @click="uploadImage">Rasm yuklang!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      <div class="">
                          <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
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
  
  
  
      <div class="flex flex-wrap justify-beetwen items-center mt-10 gap-5 2xl:gap-8">
        <div class="lg:w-[23%] lg:h-[250px] 2xl:w-[23%] 2xl:h-[307px] grid justify-center items-center border bg-[#F4F4F4] py-[24px] rounded-[7px] shadow-md">
          <div class="absolute mb-[180px] 2xl:mb-[220px] lg:ml-[170px] 2xl:ml-[300px]">
            <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="" type="button"><i class='bx bx-dots-vertical-rounded text-[28px]'></i></button>
            
            <!-- Dropdown menu -->
            <div id="dropdownToggle" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[150px] dark:bg-gray-700 dark:divide-gray-600" >
              <ul class="p-3 space-y-1 text-md text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="showModal()" href="#"><i class='bx bx-trash mr-2'></i>O'chirish</a>
                  </div>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="updateContact(el.id)" href="#"><i class='bx bx-edit alt mr-2'></i>O'zgartirish</a>
                  </div>
                </li>
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label class="relative inline-flex items-center w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#7EBA34]"></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <img src="../../assets/images/menu/5.png" alt="" class="w-[120px] h-[120px] mx-auto">
          <div class="grid justify-center items-center text-center gap-1 py-[5px]">
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">Saefood salat</h2>
            <p class="flex items-center font-[700] text-[#5B5B5B]"><i class='bx bxs-hot text-yellow-400 text-[24px] mr-3'></i> 700 kcall</p>
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">25000 so'm</h2>
          </div>
        </div>
        <div class="lg:w-[23%] lg:h-[250px] 2xl:w-[23%] 2xl:h-[307px] grid justify-center items-center border bg-[#F4F4F4] py-[24px] rounded-[7px] shadow-md">
          <div class="absolute mb-[180px] 2xl:mb-[220px] lg:ml-[170px] 2xl:ml-[300px]">
            <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="" type="button"><i class='bx bx-dots-vertical-rounded text-[28px]'></i></button>
            
            <!-- Dropdown menu -->
            <div id="dropdownToggle" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[150px] dark:bg-gray-700 dark:divide-gray-600" >
              <ul class="p-3 space-y-1 text-md text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="showModal()" href="#"><i class='bx bx-trash mr-2'></i>O'chirish</a>
                  </div>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="updateContact(el.id)" href="#"><i class='bx bx-edit alt mr-2'></i>O'zgartirish</a>
                  </div>
                </li>
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label class="relative inline-flex items-center w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#7EBA34]"></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <img src="../../assets/images/menu/5.png" alt="" class="w-[120px] h-[120px] mx-auto">
          <div class="grid justify-center items-center text-center gap-1 py-[5px]">
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">Saefood salat</h2>
            <p class="flex items-center font-[700] text-[#5B5B5B]"><i class='bx bxs-hot text-yellow-400 text-[24px] mr-3'></i> 700 kcall</p>
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">25000 so'm</h2>
          </div>
        </div>
        <div class="lg:w-[23%] lg:h-[250px] 2xl:w-[23%] 2xl:h-[307px] grid justify-center items-center border bg-[#F4F4F4] py-[24px] rounded-[7px] shadow-md">
          <div class="absolute mb-[180px] 2xl:mb-[220px] lg:ml-[170px] 2xl:ml-[300px]">
            <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="" type="button"><i class='bx bx-dots-vertical-rounded text-[28px]'></i></button>
            
            <!-- Dropdown menu -->
            <div id="dropdownToggle" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[150px] dark:bg-gray-700 dark:divide-gray-600" >
              <ul class="p-3 space-y-1 text-md text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="showModal()" href="#"><i class='bx bx-trash mr-2'></i>O'chirish</a>
                  </div>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="updateContact(el.id)" href="#"><i class='bx bx-edit alt mr-2'></i>O'zgartirish</a>
                  </div>
                </li>
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label class="relative inline-flex items-center w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#7EBA34]"></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <img src="../../assets/images/menu/5.png" alt="" class="w-[120px] h-[120px] mx-auto">
          <div class="grid justify-center items-center text-center gap-1 py-[5px]">
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">Saefood salat</h2>
            <p class="flex items-center font-[700] text-[#5B5B5B]"><i class='bx bxs-hot text-yellow-400 text-[24px] mr-3'></i> 700 kcall</p>
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">25000 so'm</h2>
          </div>
        </div>
        <div class="lg:w-[23%] lg:h-[250px] 2xl:w-[23%] 2xl:h-[307px] grid justify-center items-center border bg-[#F4F4F4] py-[24px] rounded-[7px] shadow-md">
          <div class="absolute mb-[180px] 2xl:mb-[220px] lg:ml-[170px] 2xl:ml-[300px]">
            <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="" type="button"><i class='bx bx-dots-vertical-rounded text-[28px]'></i></button>
            
            <!-- Dropdown menu -->
            <div id="dropdownToggle" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[150px] dark:bg-gray-700 dark:divide-gray-600" >
              <ul class="p-3 space-y-1 text-md text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="showModal()" href="#"><i class='bx bx-trash mr-2'></i>O'chirish</a>
                  </div>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="updateContact(el.id)" href="#"><i class='bx bx-edit alt mr-2'></i>O'zgartirish</a>
                  </div>
                </li>
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label class="relative inline-flex items-center w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#7EBA34]"></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <img src="../../assets/images/menu/5.png" alt="" class="w-[120px] h-[120px] mx-auto">
          <div class="grid justify-center items-center text-center gap-1 py-[5px]">
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">Saefood salat</h2>
            <p class="flex items-center font-[700] text-[#5B5B5B]"><i class='bx bxs-hot text-yellow-400 text-[24px] mr-3'></i> 700 kcall</p>
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">25000 so'm</h2>
          </div>
        </div>
        <div class="lg:w-[23%] lg:h-[250px] 2xl:w-[23%] 2xl:h-[307px] grid justify-center items-center border bg-[#F4F4F4] py-[24px] rounded-[7px] shadow-md">
          <div class="absolute mb-[180px] 2xl:mb-[220px] lg:ml-[170px] 2xl:ml-[300px]">
            <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="" type="button"><i class='bx bx-dots-vertical-rounded text-[28px]'></i></button>
            
            <!-- Dropdown menu -->
            <div id="dropdownToggle" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[150px] dark:bg-gray-700 dark:divide-gray-600" >
              <ul class="p-3 space-y-1 text-md text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="showModal()" href="#"><i class='bx bx-trash mr-2'></i>O'chirish</a>
                  </div>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="updateContact(el.id)" href="#"><i class='bx bx-edit alt mr-2'></i>O'zgartirish</a>
                  </div>
                </li>
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label class="relative inline-flex items-center w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#7EBA34]"></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <img src="../../assets/images/menu/5.png" alt="" class="w-[120px] h-[120px] mx-auto">
          <div class="grid justify-center items-center text-center gap-1 py-[5px]">
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">Saefood salat</h2>
            <p class="flex items-center font-[700] text-[#5B5B5B]"><i class='bx bxs-hot text-yellow-400 text-[24px] mr-3'></i> 700 kcall</p>
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">25000 so'm</h2>
          </div>
        </div>
        <div class="lg:w-[23%] lg:h-[250px] 2xl:w-[23%] 2xl:h-[307px] grid justify-center items-center border bg-[#F4F4F4] py-[24px] rounded-[7px] shadow-md">
          <div class="absolute mb-[180px] 2xl:mb-[220px] lg:ml-[170px] 2xl:ml-[300px]">
            <button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="" type="button"><i class='bx bx-dots-vertical-rounded text-[28px]'></i></button>
            
            <!-- Dropdown menu -->
            <div id="dropdownToggle" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[150px] dark:bg-gray-700 dark:divide-gray-600" >
              <ul class="p-3 space-y-1 text-md text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="showModal()" href="#"><i class='bx bx-trash mr-2'></i>O'chirish</a>
                  </div>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <a @click="updateContact(el.id)" href="#"><i class='bx bx-edit alt mr-2'></i>O'zgartirish</a>
                  </div>
                </li>
                <li>
                  <div class="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label class="relative inline-flex items-center w-full cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer">
                      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-[#7EBA34]"></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <img src="../../assets/images/menu/5.png" alt="" class="w-[120px] h-[120px] mx-auto">
          <div class="grid justify-center items-center text-center gap-1 py-[5px]">
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">Saefood salat</h2>
            <p class="flex items-center font-[700] text-[#5B5B5B]"><i class='bx bxs-hot text-yellow-400 text-[24px] mr-3'></i> 700 kcall</p>
            <h2 class="text-[20px] 2xl:text-[24px] font-[500] font-self">25000 so'm</h2>
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
          <button @click="is" type="button" class="text-[#7EBA34] border border-[#7EBA34] hover:bg-[#7EBA34] rounded-lg text-[24px] font-medium px-10 py-2.5 hover:text-white focus:z-10 ">
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
    import { drinksStore } from '../../stores/drinksStore';
    import {useRouter} from 'vue-router'
    import { drinks } from '../../service/drinks';
    import { storage } from '../../firebase'; 
    import {getDownloadURL, uploadBytes, ref as firebaseRef} from 'firebase/storage'
    
    const modal = vueRef(false);  
    const isShowModal = vueRef(false);
    

    function showModal() {
        isShowModal.value = !isShowModal.value
    }
  
    const router = useRouter();
    const store = drinksStore();
    const isUpdate = vueRef(false);
    let computedList = vueRef([]);
    const file = vueRef(null);
      const imageUrl = vueRef('');
      const uploadProgress = vueRef(0);
    
    const contactInfo = reactive({
        note_uzb: '',
        dish_uzb: '',
        dish_rus: '',
        dish_eng: ''
    })
    
    const toggleModal = () => {
        if(modal.value){
            isUpdate.value = false
            contactInfo.note_uzb=''
            contactInfo.dish_uzb=''
            contactInfo.dish_rus=''
            contactInfo.dish_eng=''
            
        }
        modal.value = !modal.value
    }
    
    const updateList = () => {
        drinks.list().then((res)=>{
            store.state.list = res.data    
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({note_uzb: 'login'})
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
            note_uzb: contactInfo.note_uzb,
            dish_uzb: contactInfo.dish_uzb,
            dish_rus: contactInfo.dish_rus,
            dish_eng: imageUrl.value
        }
    
        drinks.create(contact).then((res)=>{
            if(res.status == 201){
                contactInfo.note_uzb=''
                contactInfo.dish_uzb=''
                contactInfo.dish_rus=''
                imageUrl.value=''
                toggleModal()
                updateList();
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({note_uzb: 'login'})
            }
            console.log(error.message);
        })
    
    }
    
    const modifyContact=(event)=>{
        event.preventDefault();
        const id  = localStorage.getItem('id')
        const contact = {
            note_uzb: contactInfo.note_uzb,
            dish_uzb: contactInfo.dish_uzb,
            dish_rus: contactInfo.dish_rus,
            dish_eng: contactInfo.dish_eng
        }
    
        drinks.update(id, contact).then((res)=>{
            if(res.status == 200){
                toast.success('successfully updated contact !', {autoClose: 1000, theme: 'dark', pauseOnHover: false})
                contactInfo.note_uzb=''
                contactInfo.dish_uzb=''
                contactInfo.dish_rus=''
                contactInfo.dish_eng
                
                isUpdate.value = false;
                updateList();
                toggleModal()
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({note_uzb: 'login'})
            }
            toast.error(error.message)
        })
    }
    
    const removeContact=()=>{
        const id = localStorage.getItem('delete_id')
        drinks.remove(id).then((res)=>{
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
        contactInfo.note_uzb = foundContact[0].note_uzb
        contactInfo.dish_uzb = foundContact[0].dish_uzb
        contactInfo.dish_rus = foundContact[0].dish_rus
        contactInfo.dish_eng = foundContact[0].dish_eng
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
          const storageRef = firebaseRef(storage, 'employee/' + file.value.note_uzb);
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
  