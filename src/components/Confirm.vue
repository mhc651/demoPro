<template>
  <div>核对信息并支付</div>
</template>

<script>
    export default {
      name: "Confirm",
      created() {
        this.fetchCategory()
      },
      methods: {
        // 获取分类目录
        fetchCategory(){
          this.$store.dispatch('apply/categories').then(payload => {
            if (payload.success && payload.content) {
              const { entries } = Object
              const data = payload.content.auctionGroup
              const categories = [{ label: '全部', value: '' }]
              for (const [key, value] of entries(data)) {
                categories.push({
                  label: value,
                  value: key
                })
              }
              this.typecatalog = categories
              this.dataConfig.input.typeCatalog.options = categories
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
