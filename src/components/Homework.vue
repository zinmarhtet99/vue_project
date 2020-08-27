<template>
    <div>
        <h2>Homework Component</h2>
        <!-- <p>{{info}}</p> -->
        <div class="container">
            <div class="row">
                <div class="col-4 my-3" v-for="(items,i) in info" :key="i">
                    <div class="card">
                        <img :src="items.item_photo" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{items.item_name}}</h5>
                            <p class="card-text" v-html="items.item_description"></p>
                            <a href="#" class="btn btn-primary">Detail</a>
                            <button class="btn btn-primary ml-5">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'Homework',
    data() {
        return {
            loading: true,
            error: false,
            info: null
        }
    },
    mounted() {
        this.getItems();
    },
    methods: {
        getItems() {
            this.$http.get('http://laravelproject.yethura.me/api/items')
                .then(res => {
                    console.log(res);
                    this.info = res.data.data
                })
                .catch(err => {
                    this.error = true;
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false;
                })
        }
    }
};
</script>
<style type="text/css">
.card-img-top {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
</style>