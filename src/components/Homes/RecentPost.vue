<template>
    <div class=" mx-6 md:mx-[57px]  ">
        <h1 class=" text-[33px] md:text-[40px] font-bold md:ml-10"> Recent Post</h1>
        <div class="flex flex-wrap md:flex-row justify-around mt-8 md:mt-[70px] md:mr-16">
            <div class=" w-[150px] md:w-[240px]" v-for="i in 4 " :key="i">
                <div class="bg-white shadow-lg overflow-hidden mb-5">
                    <img class="w-full md:h-[185px] object-cover" src="../../assets/Rectangle10.png" alt="Product Image">
                    <div class="p-4">
                        <h3 class="text-[15px] md:text-xl font-semibold">Lorem Ipsum Dolor</h3>
                        <span class="text-[10px] md:text-[11px] mr-6">12/8/2022</span>
                        <span class=" text-[10px] md:text-[11px] mb-2">admin</span>
                        <p class="text-[12px] font-light">Product description lorem ipsum dolor sit amet, consectetur
                            adipiscing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style></style>