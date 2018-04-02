<template>
  <div>
    <el-row>
      <el-button-group>
        <el-button plain icon="el-icon-search"></el-button>
      </el-button-group>
    </el-row>
    <el-table :data="Product" stripe>
      <el-table-column prop="id" label="商品ID" width="140">
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="120">
      </el-table-column>
      <el-table-column prop="desc" label="商品描述">
      </el-table-column>
      <el-table-column prop="total" label="库存">
      </el-table-column>
      <el-table-column prop="sum" label="总量">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-tooltip class="item" effect="dark" content="下单" placement="top">
              <el-button type="primary" icon="el-icon-check" size="mini" @click="handleOrder(scope.$index, scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
              <el-button plain icon="el-icon-edit" size="mini" @click="handleEdit(scope.$index, scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleDelete(scope.$index, scope.row)"></el-button>
            </el-tooltip>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<style lang="scss">
  .el-row {
    text-align: left;
    margin-bottom: 20px;
  }
</style>

<script>
import {fetchApiDemo} from '../utils/fetchModel'
import ElRow from 'element-ui/packages/row/src/row'
export default {
  components: {ElRow},
  data () {
    return {
      Product: []
    }
  },
  created () {
    this.$loading({
      spinner: 'el-icon-loading',
      customClass: 'loading',
      background: 'rgba(0, 0, 0, 0.6)'
    })
    fetchApiDemo().then((res) => {
      setTimeout(() => {
        console.log(res)
        // this.Product = res.body
        this.$loading().close()
      }, 1000)
    })
  },
  methods: {
    handleOrder (index, row) {
      console.log(index, row)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleCreate () {

    }
  }
}
</script>
