<template>
    <div>
        <h2 class="text-danger">Testing Component</h2>
        <!-- <p>{{info}}</p> -->
        <!-- <button v-on:click="getData()">OK</button> -->
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card mb-3" v-for="(item,i) in info" :key="i">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img :src="item.urlToImage" class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-left">{{item.title}}</h5>
                                    <p class="card-text text-justify">{{item.description}}</p>
                                    <p class="card-text float-right"><small class="text-muted">{{item.publishedAt}}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'Testing',
    data() {
        return {
            loading: true,
            error: false,
            info: null
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-27&sortBy=publishedAt&apiKey=2d1afc1e46454a2eb24054157374e0d2')
                .then(res => {
                    console.log(res);
                    this.info = res.data.articles;
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
</style>