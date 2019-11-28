<template>
    <vx-card no-radius no-shadow>
    <div class="vx-row">
        <div class="vx-col w-full mb-3">
            <vs-select
                    autocomplete
                    class="w-full"
                    label="Select About Us"
                    v-model="academic"
                    @input="filterAcademic(academic)"
            >
                <vs-select-item :key="index" :value="item.name" :text="item.name" v-for="(item,index) in academicOnly" />
            </vs-select>
        </div>
        <div class="vx-col w-full lg:w-1/5 rounded-lg">
            <vx-card>
                <ul class="faq-topics mt-4">
                    <li class="p-2 font-medium flex items-center" @click="is_home=true;is_major=false;is_activity=false">
                        <div class="h-3 w-3 rounded-full mr-2 bg-danger-gradient"></div><span class="cursor-pointer">Home</span>
                    </li>
                    <li class="p-2 font-medium flex items-center" v-for="(item,index) in filteredAcademic[0].majors" :key="index" @click="majorIndex(index);is_home=false;is_major=true;is_activity=false">
                        <div class="h-3 w-3 rounded-full mr-2 bg-success"></div><span class="cursor-pointer">{{item.major}}</span>
                    </li>
                    <li class="p-2 font-medium flex items-center" @click="is_home=false;is_major=false;is_activity=true">
                        <div class="h-3 w-3 rounded-full mr-2 bg-success"></div><span class="cursor-pointer">Activities</span>
                    </li>
                </ul>
            </vx-card>
        </div>
        <!-- FAQ COL -->
        <div class="vx-col w-full lg:w-4/5 mt-12 md:mt-0">
            <vx-card v-if="is_home">
                <h4 class="mb-2">{{filteredAcademic[0].name}}</h4>
                <div v-html="filteredAcademic[0].content">
                </div>
            </vx-card>
            <vx-card v-if="is_major">
                <vs-tabs>
                    <vs-tab label="Home">
                        <div v-html="filteredAcademic[0].majors[major_index].content"></div>
                    </vs-tab>
                    <vs-tab label="Curriculum">
                        <div v-html="filteredAcademic[0].majors[major_index].curriculum"></div>
                    </vs-tab>
                    <vs-tab label="Schedule">
                        <div v-html="filteredAcademic[0].majors[major_index].schedule"></div>
                    </vs-tab>
                </vs-tabs>
            </vx-card>
            <vx-card no-radius no-shadow v-if="is_activity">
                <h4 class="mb-2">Activities</h4>
            </vx-card>
        </div>
    </div>
    </vx-card>
</template>

<script>
    export default {
        name: "Academic",
        data() {
            return {
                academic:'Faculty of Science and Technology',
                academicOnly : [],
                major_index:0,
                abouts:[],
                aboutFiltered:[{title:null}],
                filteredAcademic:[{majors:[]}],
                is_home:true,
                is_major:false,
                is_activity:false,
            }
        },
        computed: {
            all_aoc(){
                return this.$store.getters.all_aoc
            },
        },
        async created(){
            await this.fetchAoc();
        },
        methods:{
            fetchAoc(){
                let self = this;
                self.$store.dispatch('fetchAoc').then(function () {
                    self.filterAcademic(self.academic)
                })
            },
            filterAcademic(name){
                let self = this;
                self.academicOnly = self.all_aoc.filter(function (x) {
                    return x.majors.length
                });
                self.filteredAcademic = self.academicOnly.filter(function (x) {
                    return x.name === name
                });
            },
            majorIndex(index){
                this.major_index = index
            }
        }
    }
</script>

<style scoped>

</style>