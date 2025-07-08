package com.yassine.expensia.entities;

import com.yassine.expensia.enums.AccountType;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity()
@Table(name = "accounts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Account {

    @Id
    @Column(name= "id", nullable = false, updatable = false)
    private UUID id;

    @Column(name= "balance", nullable = false)
    private Double balance = 0.00;

    @Column(name= "incomes", nullable = false)
    private Double incomes = 0.00;

    @Column(name= "expenses", nullable = false)
    private Double expenses = 0.00;

    @Column(name= "account_type", nullable = false)
    private AccountType accountType = AccountType.PERSONAL;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Transaction> transactions = new ArrayList<>();

    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
