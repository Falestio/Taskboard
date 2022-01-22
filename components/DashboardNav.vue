<template>
  <div>

    <!-- Nav -->
    <div class="navbar shadow-lg bg-neutral text-neutral-content">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <label for="my-drawer" class="btn drawer-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
          </svg>
          </label>
        </button>
      </div> 
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">
                Trello Clone Tio
        </span>
      </div> 
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">      
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>                    
          </svg>
        </button>
      </div>
    </div>

    <!-- Drawer -->
    <div class="shadow bg-base-200 drawer h-screen">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="flex flex-col items-center justify-center drawer-content">
      </div>
      <div class="drawer-side">
        <!-- * to close the drawer -->
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <div>
              <img class="w-12 h-12 rounded-md" src="https://images.unsplash.com/photo-1625603532602-6d24b70c2110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVuc3BhbHNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
              <div>

              </div>
            </div>
          </li>
          <li>
            <a>Boards</a>
          </li>
          <li>
            <a>Members</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>