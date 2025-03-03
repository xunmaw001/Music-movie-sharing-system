package com.dao;

import com.entity.DongmanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.DongmanView;

/**
 * 动漫 Dao 接口
 *
 * @author 
 */
public interface DongmanDao extends BaseMapper<DongmanEntity> {

   List<DongmanView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
