package com.github.missthee.service.interf.compute;

import com.github.missthee.db.entity.primary.compute.Compute;

import java.util.List;

public interface ComputeService {
    List<Compute> selectGroupBy();

}