<template>
    <vx-card>
        <div class="vx-row">
            <div class="vx-col w-full mb-3">
                <vs-select
                        autocomplete
                        class="w-full"
                        label="Select About Us"
                        v-model="about"
                        @input="filterAbout(about)"
                >
                    <vs-select-item :key="index" :value="item.id" :text="item.title" v-for="(item,index) in all_abouts" />
                </vs-select>
            </div>
            <!-- FAQ COL -->
            <div class="vx-col w-full">
                <h4 class="mb-2">{{aboutFiltered[0].title}}</h4>
                <div v-html="aboutFiltered[0].content">
                </div>
            </div>
        </div>
    </vx-card>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                about:1,
                abouts:[],
                aboutFiltered:[{title:'working'}],
                is_home:true
            }
        },
        computed: {
            all_abouts(){
                return this.$store.getters.all_abouts
            },
        },
        async created(){
            await this.fetchAbout();
        },
        methods:{
            fetchAbout(){
                let self = this;
                self.$store.dispatch('fetchAbout').then(function () {
                    self.filterAbout(self.about)
                })
            },
            filterAbout(id){
                let self = this;
                self.aboutFiltered = self.all_abouts.filter(function (x) {
                    return x.id === id
                });
            }
        }
    }
</script>

<style scoped>

</style>