package com.github.common.db.mapper.primary.manage;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.CacheNamespace;
import org.springframework.stereotype.Component;
import com.github.common.config.mybatis.cache.MybatisRedisCacheConfig;
import com.github.common.db.entity.primary.manage.Permission;

@Component
@CacheNamespace(implementation = MybatisRedisCacheConfig.class)
public interface PermissionMapper extends BaseMapper<Permission> {

}